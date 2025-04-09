var express = require("express")
var app = express()
var port = process.env.port || 3000
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
description: String,
});
const Project = mongoose.model('Project', ProjectSchema);
module.exports=Project;