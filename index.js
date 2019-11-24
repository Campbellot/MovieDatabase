var express = require("express");
var url = require('url');
var request = require('request');

var app = express();



app.use(express.static("public"));

app.set("views", "expressFiles");
app.set("view engine", "ejs");

// app.get("/", function(req, res){
    
    
// });

app.get("/movies", function(req, res){
    // res.sendfile(path.join(__dirname+'/landingPage.html'));
    res.render("main");//looks in views diretory
});
app.get("/alphabetical", function(req, res){
    
    res.render("alphabetical");//looks in views diretory
});


var port = process.env.PORT || 5000;
app.listen(port, function () {//need to connect to heroku port when deploying live
    console.log("The server is responding on port 5000");
});