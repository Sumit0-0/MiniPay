import { NextFunction, Response, Request} from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface authRequest extends Request{
  userId: string | JwtPayload
}

const authMiddleware = (req: authRequest, res: Response, next: NextFunction)=>{
  try{
    const token = req.headers['token'] as string | undefined;

  if(!token){
    res.status(404).json({
      message: "token is missing"
    })
    return;
  }
  const secret = process.env.SECRET_KEY;

  if(!secret){
    res.status(500).json({
      message: "something is up with token"
    })
    return;
  }

  const decoded = jwt.verify(token,secret) as jwt.JwtPayload;
  req.userId = decoded.id;
  next();
  
  }catch(e){
    console.log(e);
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

export default authMiddleware;