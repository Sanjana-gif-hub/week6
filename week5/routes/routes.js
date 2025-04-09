var express = require("express")
var app = express()
var port = process.env.port || 3000
const mongoose = require('mongoose');
var controller=require('../controller/controller')
var router=express.Router()

router.get('/home', async (req, res) => {
    console.log('routes')
    
    controller.content(req,res)

});

module.exports=router