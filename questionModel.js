const mongoose = require("mongoose");

// question schema
const QuestionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },

    choices: {
        type: [String],
        required: true,
        validate: [checkLimit, "Error, needs at least 2 questions."]
    },

    correctAnswer: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// method for checking if there are more than 2 questions
function checkLimit(n) {
    return n.length >= 2;
}

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;