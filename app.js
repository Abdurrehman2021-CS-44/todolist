const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var tasks = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var options = {weekday: "long", day: "numeric", month: "long"}
    var currentDay = new Date();
    var day = currentDay.toLocaleDateString("en-US", options);
    res.render("list", {WeekDay: day, newTask: tasks});
});

app.post("/", function(req, res){
    var newTask = req.body.nextTask;
    tasks.push(newTask);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});