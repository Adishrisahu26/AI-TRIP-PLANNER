const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      default: "😊 Happy",
    },

    note: {
      type: String,
    },

    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Memory", memorySchema);