"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_1 = __importDefault(require("./address"));
var router = express_1.default.Router();
router.use('/address', address_1.default);
exports.default = router;
