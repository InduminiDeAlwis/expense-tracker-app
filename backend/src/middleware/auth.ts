import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthedRequest extends Request {
  user?: { id: number; email: string };
}

export function requireAuth(req: AuthedRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const token = header.slice(7);
  
  try {
    const payload = verifyToken(token) as { id: number; email: string };
    if (!payload) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}