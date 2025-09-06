import { Response } from "express";
import { prisma } from "../utils/db";
import { AuthedRequest } from "../middleware/auth";

export async function listExpenses(req: AuthedRequest, res: Response) {
  const items = await prisma.expense.findMany({
    where: { userId: req.user!.id },
    orderBy: { date: "desc" }
  });
  res.json({ items });
}

export async function createExpense(req: AuthedRequest, res: Response) {
  const { amount, date, description, categoryId } = req.body;
  if (amount == null) return res.status(400).json({ message: "amount required" });
  const item = await prisma.expense.create({
    data: {
      amount: Number(amount),
      date: date ? new Date(date) : new Date(),
      description,
      categoryId: categoryId ?? null,
      userId: req.user!.id
    }
  });
  res.status(201).json({ item });
}

export async function updateExpense(req: AuthedRequest, res: Response) {
  const id = Number(req.params.id);
  const { amount, date, description, categoryId } = req.body;

  // Ensure the expense belongs to the user
  const found = await prisma.expense.findFirst({ where: { id, userId: req.user!.id } });
  if (!found) return res.status(404).json({ message: "Not found" });

  const item = await prisma.expense.update({
    where: { id },
    data: {
      amount: amount != null ? Number(amount) : undefined,
      date: date ? new Date(date) : undefined,
      description,
      categoryId: categoryId ?? undefined
    }
  });
  res.json({ item });
}

export async function deleteExpense(req: AuthedRequest, res: Response) {
  const id = Number(req.params.id);
  // Ensure ownership
  const found = await prisma.expense.findFirst({ where: { id, userId: req.user!.id } });
  if (!found) return res.status(404).json({ message: "Not found" });

  await prisma.expense.delete({ where: { id } });
  res.status(204).send();
}
