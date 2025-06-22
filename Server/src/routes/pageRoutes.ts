import { Router } from "express";
import registeration from "../controllers/authController/registeration";
import signin from "../controllers/authController/signIn";
const router = Router();

router.post("/signup",registeration);
router.post("/signin",signin);

export default router