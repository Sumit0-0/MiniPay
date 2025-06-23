import { Response } from "express";
import { authRequest } from "../../middlewares/authMiddleware";
import { prisma } from "../../routes/pageRoutes"

const transaction = (req: authRequest, res: Response) =>{
    try{
      const userId = req.userId as string;

    if(!userId){
      res.status(400).json({
        message: "User is missing"
      })
      return;
    }

    const data = prisma.transactions.findMany({
      where: {
        userId: userId
      }
    })

    res.status(200).json({
      message: "Fetched data successfully",
      data: data
    })
    return;
    }
    catch(e){
      console.log(e);
      res.status(400).json({
        message: "Internal Server Error"
      })
    }
}

export default transaction;