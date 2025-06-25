import { prisma } from "../../routes/pageRoutes";
import { Response } from "express";
import { authRequest } from "../../middlewares/authMiddleware";

const balance = async (req: authRequest, res: Response)=>{
    try{
      const userId = req.userId as string;

      const data = await prisma.wallet.findUnique({
        where: {
          userId: userId
        }
      })
      
      if(!data){
        res.status(404).json({
          message: "Wallet not found"
        })
        return;
      }

      res.status(200).json({
        bal: data.amount
      })
      return;
    }catch(e){
      res.status(500).json({
        message: "Internal Server Error"
      })
      return;
    }
}

export default balance;