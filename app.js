var express = require ('express'),
	path = require ('path'),
	bodyParser = require ('body-parser'),
	app = express(),
	port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.set('view engine', 'html');

app.get( '/', function(req, res, next){
	res.sendFile(path.join(__dirname+'/index.html'));
} );

app.server = app.listen(port );
console.log ('Connected to '+ port );