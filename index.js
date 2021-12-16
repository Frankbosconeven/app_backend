const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const {json, application} = require("express");

//import routes into our index js
const todoRoutes = require("./routes/todoroutes");

const app = express();

// assign a route to app and identify them witha particullar path
const port = 3000;

//user cors package
app.use(cors());

//initial route
app.get("/", function(req, res){
    res.send("Welcome to HomePage");
});

app.listen(port, function(){
    console.log(`Listening on http://localhost:${port}`);
});

const dbURI = "mongodb+srv://sabtec:SabTec3000@cluster0.lxtgy.mongodb.net/todoDatabase?retryWrites=true&w=majority";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(function(result){  
    console.log("Connected to the mongodb");
 }).catch(function (err){
     console.log("could not connect to mongodb");
     
 });

 //create application
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(function(result){  
    console.log("Connected to the mongodb");
 }).catch(function (err){
     console.log("could not connect to mongodb");
     
 });