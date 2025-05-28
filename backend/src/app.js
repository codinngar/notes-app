import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./routes/NotesRouter.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
