"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHooks = void 0;
/**
 * Hooks that require authentication before execution
 */
exports.loginHooks = [
    "deploy:list:list",
    "deploy:deploy",
    "deploy:apim:apim",
    "invoke:invoke",
    "rollback:rollback",
    "remove:remove",
    "info:info",
    "invoke:apim:apim",
];
