var express = require("express");
var app = express();
var bodyParser = require("body-parser");
        
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrouns = [
        {name: "Salmon Creek", image: "https://farm5.staticflickr.com/4385/37029956231_b6b0e9058b.jpg"},
        {name: "Granite Hill", image: "https://farm5.staticflickr.com/4278/35421622636_340c84df25.jpg"},
        {name: "Mountain Goat Fest", image: "https://farm8.staticflickr.com/7505/15449913334_cc3289975b.jpg"}
];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds:campgrouns});
});

app.post("/campgrounds", function(req, res) {
    //add data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrouns.push(newCampground);
    //redirect back to campgrounds page(get)
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Has Started!");
});

