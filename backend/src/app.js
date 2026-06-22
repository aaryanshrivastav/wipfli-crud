import express from "express";
import cors from "cors";

import health from "./routes/healthRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", health)

export default app;