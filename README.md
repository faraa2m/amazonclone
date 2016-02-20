This is a clone of amazon.com which uses nodejs as backend server, mongolab as database, express router for setting up routes,
ejs for displaying views and stripe payment .

Dependencies Required:
 install nodemon  globally:
	npm install nodemon -g --save

	install other dependecies using npm init

	1) Express -- for routing
	2) Morgan -- login Request Library
	3) Mongoose -- to connect to and use mongodb (mongolab in this case)
	4) bcrypt-nodejs -- Native JS implementation of BCrypt for Node.
	5) body-parser -- to get info from post route
	6) ejs, ejs-mate -- to display views dynamically
  7) express-flash -- to display success/error messages
  8) express-session, cookie-parser -- to use session variable
  9) connect-mongo -- to connect to session store
  10) passport -- for authentication
