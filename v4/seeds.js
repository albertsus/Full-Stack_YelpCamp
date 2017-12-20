var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Moutain Camping", 
        image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e15caffa57a781fc9551553be668e401",
        description: "Camping on the moutain"
    },
    {
        name: "Tee Pee - Grand Canyon", 
        image: "https://images.unsplash.com/photo-1501724326152-7a82bf5eae72?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6ec12e4cbb785c4a44ccd220e96f4884",
        description: "Special Camping Experience"
    },
    {
        name: "Night Camping", 
        image: "https://images.unsplash.com/photo-1491439176760-28b4d8675a59?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ea5bc924eebea1ab93b8cddb6a71067b",
        description: "Camping under beautifal night"
    },
]
function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("remove campgrounds");
            // Add a few campgrounds
            data.forEach(function(seed) {
                Campground.create(seed, function(err, campground) {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        // create a comment
                        Comment.create(
                            {
                                text: "This place is great, but I wish there was Internet",
                                author: "Homer"
                            }, function(err, comment) {
                                if (err) {
                                    console.log("err for creating comment");
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created new comment!");
                                }
                            });
                    }
                });
            });
        }
    });
    
}

 module.exports = seedDB;
