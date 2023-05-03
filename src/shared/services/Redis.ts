import { default as Redis } from "ioredis";
import redis from "redis"

import environment from "../../config/environment";

class Cache {
  client: any = null;

  constructor() {
    this.client = new Redis({
      // host: redis-11569.c289.us-west-1-2.ec2.cloud.redislabs.com:11569
      // port: parseInt(environment.redisPort),
      port: 11569,
      password: "AT2RFIRJmdruOq75Z1sCnyrOQiPNjTLX",
      host: "redis-11569.c289.us-west-1-2.ec2.cloud.redislabs.com:11569",
    });
  }

  set(key: string, value: any, expiry = 72*60*60) {
    this.client.set(key, JSON.stringify(value), "EX", expiry);
  }

  async get(key: string) {
    const value = await this.client.get(key);
    return value ? JSON.parse(value) : null;
  }

  delete(key: string) {
    this.client.del(key);
  }
}

export default Cache;
