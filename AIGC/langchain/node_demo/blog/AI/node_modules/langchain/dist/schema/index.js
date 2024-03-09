import { Serializable } from "../load/serializable.js";
export const RUN_KEY = "__run";
export class BaseChatMessage {
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
export class HumanChatMessage extends BaseChatMessage {
    _getType() {
        return "human";
    }
}
export class AIChatMessage extends BaseChatMessage {
    _getType() {
        return "ai";
    }
}
export class SystemChatMessage extends BaseChatMessage {
    _getType() {
        return "system";
    }
}
export class FunctionChatMessage extends BaseChatMessage {
    constructor(text, name) {
        super(text);
        this.name = name;
    }
    _getType() {
        return "function";
    }
}
export class ChatMessage extends BaseChatMessage {
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
/**
 * Base PromptValue class. All prompt values should extend this class.
 */
export class BasePromptValue extends Serializable {
}
/**
 * Base Index class. All indexes should extend this class.
 */
export class BaseRetriever {
}
export class BaseChatMessageHistory extends Serializable {
}
export class BaseListChatMessageHistory extends Serializable {
    addUserMessage(message) {
        return this.addMessage(new HumanChatMessage(message));
    }
    addAIChatMessage(message) {
        return this.addMessage(new AIChatMessage(message));
    }
}
export class BaseCache {
}
export class BaseFileStore extends Serializable {
}
export class BaseEntityStore extends Serializable {
}
export class Docstore {
}
