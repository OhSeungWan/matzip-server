"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var constants_1 = require("./constants/constants");
var app_1 = __importDefault(require("./app/app"));
dotenv_1.default.config();
var PORT = process.env.DEV_PORT || '5000';
switch (constants_1.env) {
    case 'development':
        PORT = process.env.DEV_PORT || '5000';
        break;
    case 'production':
        PORT = process.env.PRD_PORT || '5000';
        break;
    default:
        break;
}
app_1.default.listen(PORT, function () {
    console.log("\u2705 server listening at port " + PORT);
});
