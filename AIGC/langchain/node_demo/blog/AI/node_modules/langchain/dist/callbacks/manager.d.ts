import { AgentAction, AgentFinish, BaseChatMessage, ChainValues, LLMResult } from "../schema/index.js";
import { BaseCallbackHandler, CallbackHandlerMethods } from "./base.js";
import { LangChainTracerFields } from "./handlers/tracer_langchain.js";
import { Serialized } from "../load/serializable.js";
type BaseCallbackManagerMethods = {
    [K in keyof CallbackHandlerMethods]?: (...args: Parameters<Required<CallbackHandlerMethods>[K]>) => Promise<unknown>;
};
export interface CallbackManagerOptions {
    verbose?: boolean;
    tracing?: boolean;
}
export type Callbacks = CallbackManager | (BaseCallbackHandler | CallbackHandlerMethods)[];
export declare abstract class BaseCallbackManager {
    abstract addHandler(handler: BaseCallbackHandler): void;
    abstract removeHandler(handler: BaseCallbackHandler): void;
    abstract setHandlers(handlers: BaseCallbackHandler[]): void;
    setHandler(handler: BaseCallbackHandler): void;
}
declare class BaseRunManager {
    readonly runId: string;
    protected readonly handlers: BaseCallbackHandler[];
    protected readonly inheritableHandlers: BaseCallbackHandler[];
    protected readonly tags: string[];
    protected readonly inheritableTags: string[];
    protected readonly _parentRunId?: string | undefined;
    constructor(runId: string, handlers: BaseCallbackHandler[], inheritableHandlers: BaseCallbackHandler[], tags: string[], inheritableTags: string[], _parentRunId?: string | undefined);
    handleText(text: string): Promise<void>;
}
export declare class CallbackManagerForLLMRun extends BaseRunManager implements BaseCallbackManagerMethods {
    handleLLMNewToken(token: string): Promise<void>;
    handleLLMError(err: Error | unknown): Promise<void>;
    handleLLMEnd(output: LLMResult): Promise<void>;
}
export declare class CallbackManagerForChainRun extends BaseRunManager implements BaseCallbackManagerMethods {
    getChild(tag?: string): CallbackManager;
    handleChainError(err: Error | unknown): Promise<void>;
    handleChainEnd(output: ChainValues): Promise<void>;
    handleAgentAction(action: AgentAction): Promise<void>;
    handleAgentEnd(action: AgentFinish): Promise<void>;
}
export declare class CallbackManagerForToolRun extends BaseRunManager implements BaseCallbackManagerMethods {
    getChild(tag?: string): CallbackManager;
    handleToolError(err: Error | unknown): Promise<void>;
    handleToolEnd(output: string): Promise<void>;
}
export declare class CallbackManager extends BaseCallbackManager implements BaseCallbackManagerMethods {
    handlers: BaseCallbackHandler[];
    inheritableHandlers: BaseCallbackHandler[];
    tags: string[];
    inheritableTags: string[];
    name: string;
    private readonly _parentRunId?;
    constructor(parentRunId?: string);
    handleLLMStart(llm: Serialized, prompts: string[], runId?: string, _parentRunId?: string | undefined, extraParams?: Record<string, unknown> | undefined): Promise<CallbackManagerForLLMRun>;
    handleChatModelStart(llm: Serialized, messages: BaseChatMessage[][], runId?: string, _parentRunId?: string | undefined, extraParams?: Record<string, unknown> | undefined): Promise<CallbackManagerForLLMRun>;
    handleChainStart(chain: Serialized, inputs: ChainValues, runId?: string): Promise<CallbackManagerForChainRun>;
    handleToolStart(tool: Serialized, input: string, runId?: string): Promise<CallbackManagerForToolRun>;
    addHandler(handler: BaseCallbackHandler, inherit?: boolean): void;
    removeHandler(handler: BaseCallbackHandler): void;
    setHandlers(handlers: BaseCallbackHandler[], inherit?: boolean): void;
    addTags(tags: string[], inherit?: boolean): void;
    removeTags(tags: string[]): void;
    copy(additionalHandlers?: BaseCallbackHandler[], inherit?: boolean): CallbackManager;
    static fromHandlers(handlers: CallbackHandlerMethods): CallbackManager;
    static configure(inheritableHandlers?: Callbacks, localHandlers?: Callbacks, inheritableTags?: string[], localTags?: string[], options?: CallbackManagerOptions): Promise<CallbackManager | undefined>;
}
export declare class TraceGroup {
    private groupName;
    private options?;
    private runManager?;
    constructor(groupName: string, options?: {
        sessionName?: string | undefined;
        exampleId?: string | undefined;
    } | undefined);
    private getTraceGroupCallbackManager;
    start(): Promise<CallbackManager>;
    end(): Promise<void>;
}
export declare function traceAsGroup<T, A extends any[]>(groupOptions: {
    name: string;
} & LangChainTracerFields, enclosedCode: (manager: CallbackManager, ...args: A) => Promise<T>, ...args: A): Promise<T>;
export {};
