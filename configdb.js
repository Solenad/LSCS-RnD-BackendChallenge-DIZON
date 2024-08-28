const mongoose = require('mongoose');

// function for connecting to the mongoose DB
const connectDB = async function() {
    try {
        await mongoose.connect("mongodb+srv://roedizon80:oT9WiBg8yB9umVAx@quizdb.qjax9.mongodb.net/QuizDB?retryWrites=true&w=majority&appName=QuizDB");
        console.log("Connected to database...");
    } catch (error) {
        console.log("Error when connecting to database...");
    }
}

module.exports = connectDB;