"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post('/login', auth_controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=auth.router.js.map