"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const environment_1 = __importDefault(require("../../config/environment"));
class Bcrypt {
    constructor() {
        this.saltRounds = environment_1.default.saltRounds;
    }
    async hash(data) {
        const hashedData = await bcrypt_1.default.hash(data, this.saltRounds);
        return hashedData;
    }
    async compare(data, hashedData) {
        const comparedData = await bcrypt_1.default.compare(data, hashedData);
        return comparedData;
    }
}
exports.default = Bcrypt;
