import Note from "../Model/Note.js";

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes", error);
    res.status(500).json("Internal server error");
  }
};

const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    console.error("Error in createNotes", error);
    res.status(500).json("Internal server error");
  }
};

const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    if (!updateNotes)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNotes", error);
    res.status(500).json("Internal server error");
  }
};

const deleteNotes = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in updateNotes", error);
    res.status(500).json("Internal server error");
  }
};

const getNotesById = async (req, res) => {
  try {
    const noteById = await Note.findById(req.params.id);
    if (!noteById) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(noteById);
  } catch (error) {
    console.error("Error in getNotesById", error);
    res.status(500).json("Internal server error");
  }
};

export { getAllNotes, createNotes, updateNotes, deleteNotes, getNotesById };
