const Question = require('../models/questionModel');
const Answer = require('../models/answerModel');

// create
exports.createQuestion = async function(req, res) {
    try {
        const question = await Question.create(req.body);

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update
exports.updateQuestion = async function(req, res) {
    try {
        const { id } = req.params;
        const question = await Question.findByIdAndUpdate(id, req.body);
        
        // checks if question exists
        if (!question) {
            return res.status(404).json( { message: "Question not found." } );
        }

        const updatedQuestion = await Question.findById(id);
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete
exports.deleteQuestion = async function(req, res) {
    try {
        const { id } = req.params;
        const question = await Question.findByIdAndDelete(id);
        
        // checks if question exists
        if (!question) {
            return res.status(404).json({message: "Question not found."});
        }

        res.status(200).json({message: "Question deleted."});

    } catch(error) {
        res.status(500).json( { message: error.message } );
    }
}

// get
exports.getQuestion = async function(req, res) {
    try {
        const { id } = req.params;
        const question = await Question.findById(id);

        // checks if question exists
        if (!question) {
            return res.status(404).json({message: "Question not found."});
        }

        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// list
exports.listQuestions = async function(req, res) {
    try {
        const questions = await Question.find({});
        
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json( { message: error.message });
    }
}

// check answer
exports.checkAnswer = async function(req, res) {
    try {
        const { id } = req.params;
        const { answer } = req.body;
        const question = await Question.findById(id);

        if (!question) {
            return res.status(404).json({message: "Question not found."});
        }
        
        if (!question.choices.includes(answer)) {
            return res.status(200).json({message: "Your answer is invalid."});
        }
        else {
            const checkAnswer = question.correctAnswer == answer;

            if (checkAnswer) {
                res.status(200).json({
                    checkAnswer,
                    message: "You got the correct answer!",
                    correctAnswer: question.correctAnswer,
                    userAnswer: answer
                });
            }
            else {
                res.status(200).json({
                    checkAnswer,
                    message: "You got it wrong!",
                    correctAnswer: question.correctAnswer,
                    userAnswer: answer
                });
            }
        }
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}