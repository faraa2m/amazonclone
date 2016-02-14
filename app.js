var express 	= require('express');
var morgan 		= require('morgan');
var mongoose 	= require('mongoose');
var bodyParser	= require('body-parser');

var User 		= require('./models/user')

var app 		= express();

mongoose.connect('mongodb://root:asdf1234@ds049150.mongolab.com:49150/amazonclone',function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Connected to database");
	}
});

//Middlewares
app.use(morgan('dev'));

//Routes
app.get("/",function(req,res){
	res.send("HomePage");
});

app.post("/create-user",function(req,res){
	var user = new User();
	user.profile.name = 
});

//Listener
app.listen(3000,function(err){
	if (err)
		throw err;
	console.log("Server started at port 3000");
})