import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || "production",
  dbUrl: process.env.DATABASE_URL || "",
  jwtSecret: process.env.SECRET_TOKEN || "",
  saltRounds: 10,
  redisHost: process.env.REDIS_HOST || "127.0.0.1",
  redisPort: process.env.REDIS_PORT || "6379",
};
