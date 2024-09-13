"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const rol_1 = require("../middlewares/rol");
const router = (0, express_1.Router)();
//router.get('', usersControllers.getAll)
router.get('', (0, rol_1.roles)(['admin', 'gerente']), users_controller_1.default.getAll);
exports.default = router;