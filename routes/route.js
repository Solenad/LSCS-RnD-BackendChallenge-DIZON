const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// routing to question methods
router.post('/question', questionController.createQuestion);
router.get('/questions', questionController.listQuestions);
router.get('/question/:id', questionController.getQuestion);
router.get('/question/answer/:id', questionController.checkAnswer);
router.put('/question/:id', questionController.updateQuestion);
router.delete('/question/:id', questionController.deleteQuestion);

module.exports = router;