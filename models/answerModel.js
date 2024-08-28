const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema(
  {
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;