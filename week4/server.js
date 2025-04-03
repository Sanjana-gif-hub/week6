var express = require("express")
var app = express()

const mongoose = require('mongoose');
 
app.use(express.static(__dirname+'/public'))
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
            console.log("data added")
            res.json({ statusCode: 200, data: projects, message: "Success" });
            });

            const sampleProject = new Project({
                title: "Kitten 4",
                image: "images/kitten-4.jpg",
                link: "About Kitten 4",
                description: "Demo description about kitten 4"
                });
                sampleProject.save().then(() => console.log("Sample project saved!"));
            
 
// const addNumbers = (number1, number2) => {
//     var num1 = parseInt(number1)
//     var num2 = parseInt(number2)
//     var result = num1 + num2;
//     return result;
// }
 
// app.get("/addTwoNumbers",(req,res) => {
//     var number1 = req.query.number1;
//     var number2 = req.query.number2;
//     var result = addNumbers(number1,number2)
//     res.json({statusCode: 200, data: result, message:"Success"})
// })
 
var port = process.env.port || 3000;
 
app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
})