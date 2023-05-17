const mongoose = require("mongoose");
const StorySchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    slug: String,
    
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: true,
      minlength: [4, "Please provide a title least 4 characters "],
    },
    content: {
      type: String,
      required: [true, "Please a provide a content "],
      minlength: [10, "Please provide a content least 10 characters "],
    },
  },
  { timestamps: true }
);

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
