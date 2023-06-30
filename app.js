const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let tasks = ["Read book", "Do programming"];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let options = {weekday: "long", day: "numeric", month: "long"}
    let currentDay = new Date();
    let day = currentDay.toLocaleDateString("en-US", options);
    res.render("list", {WeekDay: day, newTask: tasks});
});

app.post("/", function(req, res){
    let newTask = req.body.nextTask;
    tasks.push(newTask);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});