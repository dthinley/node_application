var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));
//this helps in not necesary declaring .ejs to all file
app.set("view engine", "ejs")


var campgrounds =[
		{name: "Salmon Creek", image:"https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f8c07aa1e8bdbd_340.jpg"},
		{name: "Yomite", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b014439df1c27fa2e5b0_340.jpg"},
		{name: "Granite Hills", image:"https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f8c07aa1e8bdbd_340.jpg"}
	];

//landing page template
app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds:campgrounds});

});


app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground ={name:name, image:image}
	campgrounds.push(newCampground);

	//redirect back to campground page
	res.redirect("/campgrounds");
});


app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});






app.listen(3000, function(){
	console.log("Yelpcamp server on!!")
});