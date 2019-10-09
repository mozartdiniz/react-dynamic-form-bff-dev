"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.getStylePerVenture = (callback, venture) => {
    fs_1.default.readFile(`./src/fakeData/styles/${venture}.json`, function (err, data) {
        if (err) {
            return console.error(err);
        }
        callback(JSON.parse(data.toString()));
    });
};
//# sourceMappingURL=StyleProvider.js.map