var express = require("express");
var app = express();

const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});

// ADDITION Route
app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

// SUBTRACTION Route
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const difference = a - b;
    res.send(`The difference of ${a} and ${b} is: ${difference}`);
});

// MULTIPLICATION Route
app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const product = a * b;
    res.send(`The product of ${a} and ${b} is: ${product}`);
});

// Handle edge cases: Large numbers and special characters
app.get('/add-large-numbers', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input");
    }
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App running at http://localhost:" + port)
});
