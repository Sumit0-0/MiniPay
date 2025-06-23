import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "../../routes/pageRoutes"

const registeration = async (req: Request, res: Response) => {
  try{
    const {firstName,lastName,email,password} = req.body;
    
    if(!firstName || !lastName || !email || !password){
      res.status(400).json({
        error: "Missing required fields"
      })
      return;
    }

    //user already exist
     const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
       res.status(409).json({ error: 'Email already in use' })
       return;
    }

    //hashing Password
    const hashPassword = await bcrypt.hash(password,5);

     await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword
      }
    })
    
    res.status(200).json({
      message: "Successfully Registered"
    })
    return
  }catch(e){
    res.status(500).json({
      message: "Server Failure"
    })
    console.log("error",e);
    return;
  } 
}

export default registeration;