const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let tasks = ["Read book", "Do programming"];
let workTasks = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    let options = {weekday: "long", day: "numeric", month: "long"}
    let currentDay = new Date();
    let day = currentDay.toLocaleDateString("en-US", options);
    res.render("list", {Title: day, newTask: tasks});
});

app.post("/", function(req, res){
    let newTask = req.body.nextTask;

    if (req.body.submit === "Work"){
        if (newTask !== ""){
            workTasks.push(newTask);
        }
        res.redirect("/work");
    } else {
        if (newTask !== ""){
            tasks.push(newTask);
        }
        res.redirect("/");
    }

});

app.get("/work", function(req, res){
    res.render("list", {Title: "Work Tasks", newTask: workTasks});
});

app.post("/work", function(req, res){
    let item = req.body.nextTask;
    workTasks.push(item);
    redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about")
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});