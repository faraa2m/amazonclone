var express 	= require('express');
var morgan 		= require('morgan');
var mongoose 	= require('mongoose'); 
var app 		= express();

//Middlewares
app.use(morgan('dev'));

app.get("/",function(req,res){
	res.send("HomePage");
});

app.listen(3000,function(err){
	if (err)
		throw err;
	console.log("Server started at port 3000");
})