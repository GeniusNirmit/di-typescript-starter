import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "./middlewares/logger/logger";
import userRoutes from "./routes/index.routes";
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(logger);

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`);
});
