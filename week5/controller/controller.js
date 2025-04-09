const content = require('../../week5/module/schema')

exports.content = async (req,res)=>{
try {
    console.log('entered try block')
    const sampleProject = new content({
        title: "Kitten 4",
        image: "images/kitten-4.jpg",
        link: "About Kitten 4",
        description: "Demo description about kitten 4"
        });
        sampleProject.save()
         console.log("Sample project saved!");
} catch (error) {
    console.log('error')
}
}