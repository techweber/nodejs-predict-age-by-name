var express = require('express');
var app = express();
var app_port = 3000;

app.listen(app_port, function(){
	console.log('Server is running on port ' + app_port);
});

app.get('/',function(req,res){

	const fetch = require('node-fetch');

	fetch('https://api.agify.io/?name='+req.query.name)
		.then(res=>res.json())
		.then(json=>res.send('<h1>Predicted age of ' + json.name.toUpperCase() + ' is ' + json.age + '</h1>'));
});