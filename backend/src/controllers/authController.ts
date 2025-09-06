import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../utils/db";
import { generateToken } from "../utils/jwt";
import { AuthedRequest } from "../middleware/auth";

export async function register(req: Request, res: Response) {
  const { name, email, password, currency = "USD" } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return res.status(409).json({ message: "Email already in use" });

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { name, email, passwordHash, currency } });
  const token = generateToken({ id: user.id, email: user.email }); // Changed from signJwt to generateToken

  res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email, currency: user.currency },
    token
  });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing fields" });

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({ id: user.id, email: user.email }); // Changed from signJwt to generateToken
  res.json({
    user: { id: user.id, name: user.name, email: user.email, currency: user.currency },
    token
  });
}

export async function me(req: AuthedRequest, res: Response) {
  const u = await prisma.user.findUnique({
    where: { id: req.user!.id },
    select: { id: true, name: true, email: true, currency: true }
  });
  res.json({ user: u });
}