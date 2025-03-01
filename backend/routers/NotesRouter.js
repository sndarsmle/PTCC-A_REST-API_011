import express from "express";
import {
    getNotes,
    createNotes,
    updateNotes,
    deleteNotes
  } from "../controllers/NotesController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.get("/notes/:id", getNotes);
router.post("/add-notes", createNotes);
router.put("/edit-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router; 
