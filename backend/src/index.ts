import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import healthRoutes from "./routes/health.js";

const app = express();
const PORT = process.env.PORT || 7182;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", healthRoutes);

app.listen(PORT, () => {
  console.log(`Super Champions API running on http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health`);
});
