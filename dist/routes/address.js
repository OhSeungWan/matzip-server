"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var address_1 = require("../controllers/address");
var router = express_1.default.Router();
router.get('', address_1.getAddressFromGeoLocation);
exports.default = router;
