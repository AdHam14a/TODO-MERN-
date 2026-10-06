import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import { connectDB } from "./Config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./Middlewares/rateLimiterMiddleware.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);
app.use("/api/auth", userRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port :", PORT);
  });
});
