"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = __importDefault(require("../../config/environment"));
const AppError_1 = __importDefault(require("../../shared/utils/AppError"));
class JwtClient {
    constructor() {
        this.accessTokenSecret = environment_1.default.jwtAccessTokenSecret;
        this.refreshTokenSecret = environment_1.default.jwtRefreshTokenSecret;
    }
    generateAccessToken(payload) {
        return (0, jsonwebtoken_1.sign)(payload, this.accessTokenSecret, { expiresIn: "3h" });
    }
    generateFundRequestToken(payload) {
        return (0, jsonwebtoken_1.sign)(payload, this.accessTokenSecret, { expiresIn: "48h" });
    }
    generateRefreshToken(payload) {
        payload.type = "refresh";
        return (0, jsonwebtoken_1.sign)(payload, this.refreshTokenSecret, { expiresIn: "7d" });
    }
    verifyFundRequestToken(token) {
        return (0, jsonwebtoken_1.verify)(token, this.accessTokenSecret);
    }
    verifyAccessToken(token) {
        return (0, jsonwebtoken_1.verify)(token, this.accessTokenSecret);
    }
    verifyRefreshToken(token) {
        if (token.type !== "refresh") {
            throw new AppError_1.default("Invalid token type", 401);
        }
        return (0, jsonwebtoken_1.verify)(token, this.refreshTokenSecret);
    }
}
exports.default = JwtClient;
