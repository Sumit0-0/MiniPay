import { RequestHandler, Router } from "express";
import registeration from "../controllers/authController/registeration";
import signin from "../controllers/authController/signIn";
import wallet from "../controllers/crudController/wallet";
import authMiddleware from "../middlewares/authMiddleware";
import { Prisma, PrismaClient } from "@prisma/client";
import transaction from "../controllers/crudController/transaction";
import findUser from "../controllers/crudController/findUser";
import balance from "../controllers/crudController/balance";

const router = Router();
const AuthMiddleware = authMiddleware as unknown as RequestHandler;
export const prisma = new PrismaClient();


router.post("/signup",registeration);
router.post("/signin",signin);
router.post("/wallet",AuthMiddleware,wallet as unknown as RequestHandler);
router.post("/transaction",AuthMiddleware,transaction as unknown as RequestHandler);
router.post("/user",findUser);
router.get("/balance",AuthMiddleware,balance as unknown as RequestHandler);


export default router