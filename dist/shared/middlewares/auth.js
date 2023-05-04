"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWT_1 = __importDefault(require("../../shared/services/JWT"));
const AppError_1 = __importDefault(require("../../shared/utils/AppError"));
const auth = (request, response, next) => {
    let token = request.headers["authorization"];
    if (!token) {
        throw new AppError_1.default("No token provided", 401);
    }
    token = token.replace("Bearer ", "");
    const { _id } = new JWT_1.default().verifyAccessToken(token);
    console.log(_id);
    // const decodedToken = new JwtClient().verifyAccessToken(token);
    // console.log(decodedToken);
    // We should add a find user user that searches the decoded id user from our database to mke sure it has not been altered!
    request.user = _id;
    // request.user = decodedToken._id
    return next();
};
exports.default = auth;
