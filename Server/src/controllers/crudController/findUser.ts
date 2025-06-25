import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const findUser = async (req: Request, res: Response)=>{
    try{
      const {Phnum} = req.body;

      if(!Phnum){
        res.status(404).json({
          message: "User field required"
        })
        return;
      }

      const data = await prisma.phoneNumber.findMany({
        where: {
          number: {
            contains: Phnum
          }
        }
      })

      if(!data){
        res.status(403).json({
          message: "User not found"
        })
        return;
      }

      res.status(200).json({
        message: "User Found",
        data: data
      })
      return;

    }catch(e){
      res.status(500).json({
        message: "Internal Server Error"
      })
    }
}

export default findUser;