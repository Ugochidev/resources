"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
require("express-async-errors");
const environment_1 = __importDefault(require("../config/environment"));
const morgan_1 = __importDefault(require("morgan"));
const errorHandler_1 = __importDefault(require("../shared/middlewares/errorHandler"));
const rateLimiter_1 = __importDefault(require("../shared/middlewares/rateLimiter"));
const routes_1 = __importDefault(require("../shared/routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        require('../config/database');
        this.app.use((0, morgan_1.default)('dev', {
            skip: (request, response) => environment_1.default.nodeEnv === 'test',
        }));
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(rateLimiter_1.default);
        this.setRoutes();
        this.app.use(errorHandler_1.default);
    }
    setRoutes() {
        this.app.get('/', async (request, response) => {
            response.json({
                status: true,
                message: 'Welcome',
            });
        });
        this.app.use('/api/v1', routes_1.default);
    }
    getApp() {
        return this.app;
    }
    listen() {
        const { port } = environment_1.default;
        this.app.listen(port, () => {
            console.log(`Listening at port ${port}`);
        });
    }
}
exports.default = App;
