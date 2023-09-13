"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const ServerError_1 = __importDefault(require("core/instances/ServerError"));
const http_status_1 = __importDefault(require("http-status"));
const loginUser = async (req, res) => {
    try {
        // LOGIC
    }
    catch (error) {
        if (error instanceof ServerError_1.default) {
            res.status(error.code || 502);
            res.json({ error: error.message });
        }
        else {
            res.status(http_status_1.default.INTERNAL_SERVER_ERROR);
            res.json({ error: 'Internal server error' });
        }
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=auth.controller.js.map