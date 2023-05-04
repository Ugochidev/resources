"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
class Cache {
    constructor() {
        this.client = null;
        this.client = new ioredis_1.default({
            // host: redis-11569.c289.us-west-1-2.ec2.cloud.redislabs.com:11569
            // port: parseInt(environment.redisPort),
            port: 11569,
            password: "AT2RFIRJmdruOq75Z1sCnyrOQiPNjTLX",
            host: "redis-11569.c289.us-west-1-2.ec2.cloud.redislabs.com:11569",
        });
    }
    set(key, value, expiry = 72 * 60 * 60) {
        this.client.set(key, JSON.stringify(value), "EX", expiry);
    }
    async get(key) {
        const value = await this.client.get(key);
        return value ? JSON.parse(value) : null;
    }
    delete(key) {
        this.client.del(key);
    }
}
exports.default = Cache;
