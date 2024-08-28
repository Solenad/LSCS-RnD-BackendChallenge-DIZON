const express = require('express');
const router = require('./routes/route');
const connectDB = require('./configdb');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', router);

// calls connectDB method
connectDB();

// listens to port 3000
app.listen(3000, function() {
    console.log("Server is running on local port 3000...");
});

// test if writing on localhost:3000 works
app.get('/', function(req, res) {
    res.send("Hello World!");
});