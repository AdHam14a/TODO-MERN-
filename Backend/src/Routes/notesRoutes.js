import express from "express";
import {
  createNotes,
  deleteNotes,
  getAllNotes,
  getNotesById,
  updateNotes,
} from "../Controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
router.get("/byID/:id", getNotesById);

export default router;
