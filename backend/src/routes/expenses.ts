import { Router } from "express";
import { requireAuth } from "../middleware/auth";
import { createExpense, deleteExpense, listExpenses, updateExpense } from "../controllers/expenseController";

const router = Router();
router.use(requireAuth);

router.get("/", listExpenses);
router.post("/", createExpense);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;