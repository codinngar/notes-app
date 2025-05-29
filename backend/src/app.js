import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/NotesRouter.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
