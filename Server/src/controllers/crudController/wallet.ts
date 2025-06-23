import { Response } from "express"
import { authRequest } from "../../middlewares/authMiddleware"
import { prisma } from "../../routes/pageRoutes"

const wallet = async (req: authRequest, res: Response) => {
   try{
     const userId = req.userId as string;
    const {Phnum,amount} = req.body;

    if(!userId || !Phnum || !amount){
      res.status(400).json({
        message: "data is missing"
      })
      return;
    }

    const isMatch =await prisma.phoneNumber.findUnique({
      where: {
        number: Phnum
      }
    })

    if(isMatch){
      res.status(404).json({
        message: "User already exist"
      })
      return;
    }
    
    await prisma.phoneNumber.create({
      data: {
        number: Phnum,
        userId: userId
      }
    })

    await prisma.wallet.create({
      data: {
        amount: amount,
        userId: userId
      }
    })

    res.status(200).json({
      message: "Wallet created succesfully"
    })
    return;

   }catch(e){
    console.log(e);
    res.status(500).json({
      message: "Internal Server Error"
    })
    return;
   }
}


export default wallet;