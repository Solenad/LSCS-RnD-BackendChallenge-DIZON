const Question = require('./questionModel');

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
        const { id } = req.params.id;
        const question = await Question.findById(id);

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
