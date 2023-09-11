import { Router } from "express";

import PostResource from "../controllers/Post.controllers";

const router = Router();
const postResource = new PostResource();

router.post("/", postResource.create);

export default router;
