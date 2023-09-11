import { Router } from "express";
import authRoutes from "../modules/auths/routes/auth.routes";
import postRoutes from "../modules/postResources/routes/postRoute.routes"

const router = Router();


router.use("/auth", authRoutes);
router.use("/post", postRoutes)

export default router;
