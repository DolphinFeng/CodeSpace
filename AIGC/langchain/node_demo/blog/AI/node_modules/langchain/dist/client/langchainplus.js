import { LangChainPlusClient } from "langchainplus-sdk";
import { LangChainTracer } from "../callbacks/handlers/tracer_langchain.js";
import { mapStoredMessagesToChatMessages } from "../stores/message/utils.js";
const stringifyError = (err) => {
    let result;
    if (err == null) {
        result = "Error null or undefined";
    }
    else {
        const error = err;
        result = `Error: ${error?.name}: ${error?.message}`;
    }
    return result;
};
export function isLLM(llm) {
    const blm = llm;
    return (typeof blm?._modelType === "function" && blm?._modelType() === "base_llm");
}
export function isChatModel(llm) {
    const blm = llm;
    return (typeof blm?._modelType === "function" &&
        blm?._modelType() === "base_chat_model");
}
export async function isChain(llm) {
    if (isLLM(llm)) {
        return false;
    }
    const bchFactory = llm;
    const bch = await bchFactory();
    return (typeof bch?._chainType === "function" && bch?._chainType() !== undefined);
}
async function getModelOrFactoryType(llm) {
    if (isLLM(llm)) {
        return "llm";
    }
    if (isChatModel(llm)) {
        return "chatModel";
    }
    const bchFactory = llm;
    const bch = await bchFactory();
    if (typeof bch?._chainType === "function") {
        return "chainFactory";
    }
    throw new Error("Unknown model or factory type");
}
const runLLM = async (example, tracer, llm, { numRepetitions = 1 }) => {
    const results = await Promise.all(Array.from({ length: numRepetitions }).map(async () => {
        try {
            const prompt = example.inputs.prompt;
            return llm.generate([prompt], undefined, [tracer]);
        }
        catch (e) {
            console.error(e);
            return stringifyError(e);
        }
    }));
    return results;
};
const runChain = async (example, tracer, chainFactory, { numRepetitions = 1, }) => {
    const results = await Promise.all(Array.from({ length: numRepetitions }).map(async () => {
        try {
            const chain = await chainFactory();
            return chain.call(example.inputs, [tracer]);
        }
        catch (e) {
            console.error(e);
            return stringifyError(e);
        }
    }));
    return results;
};
const runChatModel = async (example, tracer, chatModel, { numRepetitions = 1, }) => {
    const results = await Promise.all(Array.from({ length: numRepetitions }).map(async () => {
        try {
            const messages = example.inputs.messages;
            return chatModel.generate([mapStoredMessagesToChatMessages(messages)], undefined, [tracer]);
        }
        catch (e) {
            console.error(e);
            return stringifyError(e);
        }
    }));
    return results;
};
export const runOnDataset = async (datasetName, llmOrChainFactory, { numRepetitions = 1, sessionName, client, } = {}) => {
    const client_ = client ?? new LangChainPlusClient({});
    const examples = await client_.listExamples({ datasetName });
    let sessionName_;
    if (sessionName === undefined) {
        const currentTime = new Date().toISOString();
        sessionName_ = `${datasetName}-${llmOrChainFactory.constructor.name}-${currentTime}`;
    }
    else {
        sessionName_ = sessionName;
    }
    const results = {};
    const modelOrFactoryType = await getModelOrFactoryType(llmOrChainFactory);
    await Promise.all(examples.map(async (example) => {
        const tracer = new LangChainTracer({
            exampleId: example.id,
            sessionName: sessionName_,
        });
        if (modelOrFactoryType === "llm") {
            const llm = llmOrChainFactory;
            const llmResult = await runLLM(example, tracer, llm, {
                numRepetitions,
            });
            results[example.id] = llmResult;
        }
        else if (modelOrFactoryType === "chainFactory") {
            const chainFactory = llmOrChainFactory;
            const chainResult = await runChain(example, tracer, chainFactory, {
                numRepetitions,
            });
            results[example.id] = chainResult;
        }
        else if (modelOrFactoryType === "chatModel") {
            const chatModel = llmOrChainFactory;
            const chatModelResult = await runChatModel(example, tracer, chatModel, {
                numRepetitions,
            });
            results[example.id] = chatModelResult;
        }
        else {
            throw new Error(` llm or chain type: ${llmOrChainFactory}`);
        }
    }));
    return results;
};
