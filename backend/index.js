import express from "express";
import cors from "cors";
import NotesRouter from "./routers/NotesRouter.js";


const app = express();
app.use(cors());
app.use(express.json());  
app.use(NotesRouter);  

app.listen(5000, () => console.log("Server berjalan broo ^^, lanjutkan ..."));