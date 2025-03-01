import Notes from "../models/NotesModel.js";

//CREATE
export const createNotes = async (req, res) => {
    const { title, content } = req.body;
  
    console.log("data param", req.body);
  
    try {
      const notes = await Notes.create({
        title,
        content,
      });
      res.status(201).json({
        message: "Notes baru berhasil dibuat",
        data: notes,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const getNotes = async (req, res) => {
    const { id } = req.params;
    try {
      const notes = id
        ? await Notes.findAll({ where: { id } })
        : await Notes.findAll();
  
      res.status(200).json({
        message: "Notes berhasil dIambil",
        id: id,
        data: notes,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const updateNotes = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const notes = await Notes.update(
        {
          title,
          content,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({
        message: "Notesmu berhasil diupdate",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteNotes = async (req, res) => {
    const { id } = req.params;
    try {
      const notes = await Notes.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: "Notesmu baru saja dihapus",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

