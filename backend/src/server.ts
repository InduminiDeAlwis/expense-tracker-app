import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import authRoutes from "./routes/auth";
import expenseRoutes from "./routes/expenses";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*", credentials: true }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.use(errorHandler);

const PORT = Number(process.env.PORT || 5000);
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
