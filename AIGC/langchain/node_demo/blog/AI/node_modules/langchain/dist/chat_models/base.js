import { AIChatMessage, HumanChatMessage, RUN_KEY, } from "../schema/index.js";
import { BaseLanguageModel, } from "../base_language/index.js";
import { CallbackManager, } from "../callbacks/manager.js";
export class BaseChatModel extends BaseLanguageModel {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "chat_models", this._llmType()]
        });
    }
    async generate(messages, options, callbacks) {
        const generations = [];
        const llmOutputs = [];
        let parsedOptions;
        if (Array.isArray(options)) {
            parsedOptions = { stop: options };
        }
        else if (options?.timeout && !options.signal) {
            parsedOptions = {
                ...options,
                signal: AbortSignal.timeout(options.timeout),
            };
        }
        else {
            parsedOptions = options ?? {};
        }
        const callbackManager_ = await CallbackManager.configure(callbacks, this.callbacks, parsedOptions.tags, this.tags, { verbose: this.verbose });
        const extra = {
            options: parsedOptions,
            invocation_params: this?.invocationParams(),
        };
        const runManager = await callbackManager_?.handleChatModelStart(this.toJSON(), messages, undefined, undefined, extra);
        try {
            const results = await Promise.all(messages.map((messageList) => this._generate(messageList, parsedOptions, runManager)));
            for (const result of results) {
                if (result.llmOutput) {
                    llmOutputs.push(result.llmOutput);
                }
                generations.push(result.generations);
            }
        }
        catch (err) {
            await runManager?.handleLLMError(err);
            throw err;
        }
        const output = {
            generations,
            llmOutput: llmOutputs.length
                ? this._combineLLMOutput?.(...llmOutputs)
                : undefined,
        };
        await runManager?.handleLLMEnd(output);
        Object.defineProperty(output, RUN_KEY, {
            value: runManager ? { runId: runManager?.runId } : undefined,
            configurable: true,
        });
        return output;
    }
    /**
     * Get the parameters used to invoke the model
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invocationParams() {
        return {};
    }
    _modelType() {
        return "base_chat_model";
    }
    async generatePrompt(promptValues, options, callbacks) {
        const promptMessages = promptValues.map((promptValue) => promptValue.toChatMessages());
        return this.generate(promptMessages, options, callbacks);
    }
    async call(messages, options, callbacks) {
        const result = await this.generate([messages], options, callbacks);
        const generations = result.generations;
        return generations[0][0].message;
    }
    async callPrompt(promptValue, options, callbacks) {
        const promptMessages = promptValue.toChatMessages();
        return this.call(promptMessages, options, callbacks);
    }
    async predictMessages(messages, options, callbacks) {
        return this.call(messages, options, callbacks);
    }
    async predict(text, options, callbacks) {
        const message = new HumanChatMessage(text);
        const result = await this.call([message], options, callbacks);
        return result.text;
    }
}
export class SimpleChatModel extends BaseChatModel {
    async _generate(messages, options, runManager) {
        const text = await this._call(messages, options, runManager);
        const message = new AIChatMessage(text);
        return {
            generations: [
                {
                    text: message.text,
                    message,
                },
            ],
        };
    }
}
