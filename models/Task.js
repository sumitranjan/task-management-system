const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  status: { type: String, enum: ["open", "completed"], default: "open" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comments: [{ text: String, date: Date }],
  attachments: [{ type: String }],
});

module.exports = mongoose.model("Task", taskSchema);
