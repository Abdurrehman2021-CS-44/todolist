const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    var currentDay = new Date();
    var day = currentDay.getDay();
    var week = "";
    switch (day){
        case 0:
            week = "Sunday";
            break;
        case 1:
            week = "Monday";
            break;
        case 2:
            week = "Tuesday";
            break;
        case 3:
            week = "Wednesday";
            break;
        case 4:
            week = "Thursday";
            break;
        case 5:
            week = "Friday";
            break;
        case 6:
            week = "Saturday";
            break;
        default:
            console.log("Error");
    }
    res.render("list", {WeekDay: week});
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});