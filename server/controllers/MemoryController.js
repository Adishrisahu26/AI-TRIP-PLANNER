import Memory from "../models/Memory.js";

// =========================
// Create Memory
// =========================
export const createMemory = async (req, res) => {
  try {
    const { title, location, mood, note, images } = req.body;

    const memory = await Memory.create({
      title,
      location,
      mood,
      note,
      images,
    });

    res.status(201).json({
      success: true,
      memory,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =========================
// Get All Memories
// =========================
export const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      memories,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// =========================
// Delete Memory
// =========================
export const deleteMemory = async (req, res) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Memory deleted successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};