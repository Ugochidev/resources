"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
class UploadService {
    constructor() {
        this.cloudinaryUploadMethod = async (file) => {
            return new Promise((resolve) => {
                this.cloudinary.uploader.upload(file, (err, res) => {
                    if (err)
                        return res?.status(500).send("upload file error");
                    resolve({
                        res: res?.secure_url,
                    });
                });
            });
        };
        this.cloudinary = cloudinary_1.default.v2;
        this.cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
}
exports.default = UploadService;
