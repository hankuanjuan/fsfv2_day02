//load express - from node_module directory
var express = require("express");

//create an instance of express appln
var app = express();

// start of request processing

app.use(function(req, res, next) {
    console.info("Incoming request = %s.", req.originalUrl);
    next();
});

//serve static files from public directory
app.use(express.static(__dirname + "/public"));

//serves files from bower_components directory
app.use(express.static(__dirname + "/bower_components"));

// app.use(express.static(__dirname + "bower_components/components-font-awesome/css/font-awesome.css"));

//middleware - is a function that handles/process requests
app.use(function(req, res){
    console.info("File not found in public = %s.", req.originalUrl);
    res.redirect("/error.html");
});

//set port
app.set("port",
    process.argv[2] || process.env.APP_PORT || 3000);

//start server on por
app.listen(app.get("port"), function() {
    console.info("Appln started on port %d", app.get("port"));
});