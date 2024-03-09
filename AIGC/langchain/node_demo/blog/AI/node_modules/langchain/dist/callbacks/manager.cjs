"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traceAsGroup = exports.TraceGroup = exports.CallbackManager = exports.CallbackManagerForToolRun = exports.CallbackManagerForChainRun = exports.CallbackManagerForLLMRun = exports.BaseCallbackManager = void 0;
const uuid_1 = require("uuid");
const base_js_1 = require("./base.cjs");
const console_js_1 = require("./handlers/console.cjs");
const initialize_js_1 = require("./handlers/initialize.cjs");
const base_js_2 = require("../memory/base.cjs");
const env_js_1 = require("../util/env.cjs");
const tracer_langchain_js_1 = require("./handlers/tracer_langchain.cjs");
const promises_js_1 = require("./promises.cjs");
class BaseCallbackManager {
    setHandler(handler) {
        return this.setHandlers([handler]);
    }
}
exports.BaseCallbackManager = BaseCallbackManager;
class BaseRunManager {
    constructor(runId, handlers, inheritableHandlers, tags, inheritableTags, _parentRunId) {
        Object.defineProperty(this, "runId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: runId
        });
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: handlers
        });
        Object.defineProperty(this, "inheritableHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: inheritableHandlers
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: tags
        });
        Object.defineProperty(this, "inheritableTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: inheritableTags
        });
        Object.defineProperty(this, "_parentRunId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _parentRunId
        });
    }
    async handleText(text) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            try {
                await handler.handleText?.(text, this.runId, this._parentRunId);
            }
            catch (err) {
                console.error(`Error in handler ${handler.constructor.name}, handleText: ${err}`);
            }
        }, handler.awaitHandlers)));
    }
}
class CallbackManagerForLLMRun extends BaseRunManager {
    async handleLLMNewToken(token) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMNewToken?.(token, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMNewToken: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleLLMError(err) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMError?.(err, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleLLMEnd(output) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMEnd?.(output, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
exports.CallbackManagerForLLMRun = CallbackManagerForLLMRun;
class CallbackManagerForChainRun extends BaseRunManager {
    getChild(tag) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        if (tag) {
            manager.addTags([tag], false);
        }
        return manager;
    }
    async handleChainError(err) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainError?.(err, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleChainEnd(output) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainEnd?.(output, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleAgentAction(action) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleAgentAction?.(action, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleAgentAction: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleAgentEnd(action) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleAgentEnd?.(action, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleAgentEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
exports.CallbackManagerForChainRun = CallbackManagerForChainRun;
class CallbackManagerForToolRun extends BaseRunManager {
    getChild(tag) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const manager = new CallbackManager(this.runId);
        manager.setHandlers(this.inheritableHandlers);
        manager.addTags(this.inheritableTags);
        if (tag) {
            manager.addTags([tag], false);
        }
        return manager;
    }
    async handleToolError(err) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolError?.(err, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolError: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
    async handleToolEnd(output) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolEnd?.(output, this.runId, this._parentRunId);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolEnd: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
    }
}
exports.CallbackManagerForToolRun = CallbackManagerForToolRun;
class CallbackManager extends BaseCallbackManager {
    constructor(parentRunId) {
        super();
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inheritableHandlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "inheritableTags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "callback_manager"
        });
        Object.defineProperty(this, "_parentRunId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.handlers = [];
        this.inheritableHandlers = [];
        this._parentRunId = parentRunId;
    }
    async handleLLMStart(llm, prompts, runId = (0, uuid_1.v4)(), _parentRunId = undefined, extraParams = undefined) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreLLM) {
                try {
                    await handler.handleLLMStart?.(llm, prompts, runId, this._parentRunId, extraParams, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this._parentRunId);
    }
    async handleChatModelStart(llm, messages, runId = (0, uuid_1.v4)(), _parentRunId = undefined, extraParams = undefined) {
        let messageStrings;
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreLLM) {
                try {
                    if (handler.handleChatModelStart)
                        await handler.handleChatModelStart?.(llm, messages, runId, this._parentRunId, extraParams, this.tags);
                    else if (handler.handleLLMStart) {
                        messageStrings = messages.map((x) => (0, base_js_2.getBufferString)(x));
                        await handler.handleLLMStart?.(llm, messageStrings, runId, this._parentRunId, extraParams, this.tags);
                    }
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleLLMStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForLLMRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this._parentRunId);
    }
    async handleChainStart(chain, inputs, runId = (0, uuid_1.v4)()) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreChain) {
                try {
                    await handler.handleChainStart?.(chain, inputs, runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleChainStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForChainRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this._parentRunId);
    }
    async handleToolStart(tool, input, runId = (0, uuid_1.v4)()) {
        await Promise.all(this.handlers.map((handler) => (0, promises_js_1.consumeCallback)(async () => {
            if (!handler.ignoreAgent) {
                try {
                    await handler.handleToolStart?.(tool, input, runId, this._parentRunId, this.tags);
                }
                catch (err) {
                    console.error(`Error in handler ${handler.constructor.name}, handleToolStart: ${err}`);
                }
            }
        }, handler.awaitHandlers)));
        return new CallbackManagerForToolRun(runId, this.handlers, this.inheritableHandlers, this.tags, this.inheritableTags, this._parentRunId);
    }
    addHandler(handler, inherit = true) {
        this.handlers.push(handler);
        if (inherit) {
            this.inheritableHandlers.push(handler);
        }
    }
    removeHandler(handler) {
        this.handlers = this.handlers.filter((_handler) => _handler !== handler);
        this.inheritableHandlers = this.inheritableHandlers.filter((_handler) => _handler !== handler);
    }
    setHandlers(handlers, inherit = true) {
        this.handlers = [];
        this.inheritableHandlers = [];
        for (const handler of handlers) {
            this.addHandler(handler, inherit);
        }
    }
    addTags(tags, inherit = true) {
        this.removeTags(tags); // Remove duplicates
        this.tags.push(...tags);
        if (inherit) {
            this.inheritableTags.push(...tags);
        }
    }
    removeTags(tags) {
        this.tags = this.tags.filter((tag) => !tags.includes(tag));
        this.inheritableTags = this.inheritableTags.filter((tag) => !tags.includes(tag));
    }
    copy(additionalHandlers = [], inherit = true) {
        const manager = new CallbackManager(this._parentRunId);
        for (const handler of this.handlers) {
            const inheritable = this.inheritableHandlers.includes(handler);
            manager.addHandler(handler, inheritable);
        }
        for (const tag of this.tags) {
            const inheritable = this.inheritableTags.includes(tag);
            manager.addTags([tag], inheritable);
        }
        for (const handler of additionalHandlers) {
            if (
            // Prevent multiple copies of console_callback_handler
            manager.handlers
                .filter((h) => h.name === "console_callback_handler")
                .some((h) => h.name === handler.name)) {
                continue;
            }
            manager.addHandler(handler, inherit);
        }
        return manager;
    }
    static fromHandlers(handlers) {
        class Handler extends base_js_1.BaseCallbackHandler {
            constructor() {
                super();
                Object.defineProperty(this, "name", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: (0, uuid_1.v4)()
                });
                Object.assign(this, handlers);
            }
        }
        const manager = new this();
        manager.addHandler(new Handler());
        return manager;
    }
    static async configure(inheritableHandlers, localHandlers, inheritableTags, localTags, options) {
        let callbackManager;
        if (inheritableHandlers || localHandlers) {
            if (Array.isArray(inheritableHandlers) || !inheritableHandlers) {
                callbackManager = new CallbackManager();
                callbackManager.setHandlers(inheritableHandlers?.map(ensureHandler) ?? [], true);
            }
            else {
                callbackManager = inheritableHandlers;
            }
            callbackManager = callbackManager.copy(Array.isArray(localHandlers)
                ? localHandlers.map(ensureHandler)
                : localHandlers?.handlers, false);
        }
        const verboseEnabled = (0, env_js_1.getEnvironmentVariable)("LANGCHAIN_VERBOSE") || options?.verbose;
        const tracingV2Enabled = (0, env_js_1.getEnvironmentVariable)("LANGCHAIN_TRACING_V2") ?? false;
        const tracingEnabled = tracingV2Enabled ||
            ((0, env_js_1.getEnvironmentVariable)("LANGCHAIN_TRACING") ?? false);
        if (verboseEnabled || tracingEnabled) {
            if (!callbackManager) {
                callbackManager = new CallbackManager();
            }
            if (verboseEnabled &&
                !callbackManager.handlers.some((handler) => handler.name === console_js_1.ConsoleCallbackHandler.prototype.name)) {
                const consoleHandler = new console_js_1.ConsoleCallbackHandler();
                callbackManager.addHandler(consoleHandler, true);
            }
            if (tracingEnabled &&
                !callbackManager.handlers.some((handler) => handler.name === "langchain_tracer")) {
                if (tracingV2Enabled) {
                    callbackManager.addHandler(await (0, initialize_js_1.getTracingV2CallbackHandler)(), true);
                }
                else {
                    const session = (0, env_js_1.getEnvironmentVariable)("LANGCHAIN_SESSION");
                    callbackManager.addHandler(await (0, initialize_js_1.getTracingCallbackHandler)(session), true);
                }
            }
        }
        if (inheritableTags || localTags) {
            if (callbackManager) {
                callbackManager.addTags(inheritableTags ?? []);
                callbackManager.addTags(localTags ?? [], false);
            }
        }
        return callbackManager;
    }
}
exports.CallbackManager = CallbackManager;
function ensureHandler(handler) {
    if ("name" in handler) {
        return handler;
    }
    return base_js_1.BaseCallbackHandler.fromMethods(handler);
}
class TraceGroup {
    constructor(groupName, options) {
        Object.defineProperty(this, "groupName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: groupName
        });
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "runManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async getTraceGroupCallbackManager(group_name, options) {
        const cb = new tracer_langchain_js_1.LangChainTracer(options);
        const cm = await CallbackManager.configure([cb]);
        const runManager = await cm?.handleChainStart({
            lc: 1,
            type: "not_implemented",
            id: ["langchain", "callbacks", "groups", group_name],
        }, {});
        if (!runManager) {
            throw new Error("Failed to create run group callback manager.");
        }
        return runManager;
    }
    async start() {
        if (!this.runManager) {
            this.runManager = await this.getTraceGroupCallbackManager(this.groupName, this.options);
        }
        return this.runManager.getChild();
    }
    async end() {
        if (this.runManager) {
            await this.runManager.handleChainEnd({});
            this.runManager = undefined;
        }
    }
}
exports.TraceGroup = TraceGroup;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function traceAsGroup(groupOptions, enclosedCode, ...args) {
    const traceGroup = new TraceGroup(groupOptions.name, groupOptions);
    const callbackManager = await traceGroup.start();
    try {
        return await enclosedCode(callbackManager, ...args);
    }
    finally {
        await traceGroup.end();
    }
}
exports.traceAsGroup = traceAsGroup;
