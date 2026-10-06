import express from "express";
import {
  createNotes,
  deleteNotes,
  getAllNotes,
  getNotesById,
  updateNotes,
} from "../Controllers/notesControllers.js";
import protectRoute from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protectRoute, getAllNotes);
router.post("/", protectRoute, createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
router.get("/:id", getNotesById);

export default router;
