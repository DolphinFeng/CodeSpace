"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Docstore = exports.BaseEntityStore = exports.BaseFileStore = exports.BaseCache = exports.BaseListChatMessageHistory = exports.BaseChatMessageHistory = exports.BaseRetriever = exports.BasePromptValue = exports.ChatMessage = exports.FunctionChatMessage = exports.SystemChatMessage = exports.AIChatMessage = exports.HumanChatMessage = exports.BaseChatMessage = exports.RUN_KEY = void 0;
const serializable_js_1 = require("../load/serializable.cjs");
exports.RUN_KEY = "__run";
class BaseChatMessage {
    constructor(text, kwargs) {
        /** The text of the message. */
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The name of the message sender in a multi-user chat. */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Additional keyword arguments */
        Object.defineProperty(this, "additional_kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        this.text = text;
        this.additional_kwargs = kwargs || {};
    }
    toJSON() {
        return {
            type: this._getType(),
            data: {
                content: this.text,
                role: "role" in this ? this.role : undefined,
                name: this.name,
                additional_kwargs: this.additional_kwargs,
            },
        };
    }
}
exports.BaseChatMessage = BaseChatMessage;
class HumanChatMessage extends BaseChatMessage {
    _getType() {
        return "human";
    }
}
exports.HumanChatMessage = HumanChatMessage;
class AIChatMessage extends BaseChatMessage {
    _getType() {
        return "ai";
    }
}
exports.AIChatMessage = AIChatMessage;
class SystemChatMessage extends BaseChatMessage {
    _getType() {
        return "system";
    }
}
exports.SystemChatMessage = SystemChatMessage;
class FunctionChatMessage extends BaseChatMessage {
    constructor(text, name) {
        super(text);
        this.name = name;
    }
    _getType() {
        return "function";
    }
}
exports.FunctionChatMessage = FunctionChatMessage;
class ChatMessage extends BaseChatMessage {
    constructor(text, role) {
        super(text);
        Object.defineProperty(this, "role", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.role = role;
    }
    _getType() {
        return "generic";
    }
}
exports.ChatMessage = ChatMessage;
/**
 * Base PromptValue class. All prompt values should extend this class.
 */
class BasePromptValue extends serializable_js_1.Serializable {
}
exports.BasePromptValue = BasePromptValue;
/**
 * Base Index class. All indexes should extend this class.
 */
class BaseRetriever {
}
exports.BaseRetriever = BaseRetriever;
class BaseChatMessageHistory extends serializable_js_1.Serializable {
}
exports.BaseChatMessageHistory = BaseChatMessageHistory;
class BaseListChatMessageHistory extends serializable_js_1.Serializable {
    addUserMessage(message) {
        return this.addMessage(new HumanChatMessage(message));
    }
    addAIChatMessage(message) {
        return this.addMessage(new AIChatMessage(message));
    }
}
exports.BaseListChatMessageHistory = BaseListChatMessageHistory;
class BaseCache {
}
exports.BaseCache = BaseCache;
class BaseFileStore extends serializable_js_1.Serializable {
}
exports.BaseFileStore = BaseFileStore;
class BaseEntityStore extends serializable_js_1.Serializable {
}
exports.BaseEntityStore = BaseEntityStore;
class Docstore {
}
exports.Docstore = Docstore;
