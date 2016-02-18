var express 	= require('express');
var morgan 		= require('morgan');
var mongoose 	= require('mongoose');
var bodyParser	= require('body-parser');
var ejs 		= require('ejs');
var engine		= require('ejs-mate');

var User 		= require('./models/user');

var app 		= express();

mongoose.connect('mongodb://root:asdf1234@ds049150.mongolab.com:49150/amazonclone',function(err){
	if(err){
		console.log(err);
	} else {
		console.log("Connected to database");
	}
});

//Middlewares
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('views',__dirname + '/views');
app.engine('ejs', engine);
app.set('view engine','ejs');

//Routes

var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);


//Listener
app.listen(3000,function(err){
	if (err)
		throw err;
	console.log("Server started at port 3000");
})
