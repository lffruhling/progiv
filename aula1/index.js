var express = require ('express');
var app = express();

app.get('/', function(req, res){
	res.send("Olá mundo!");
});

app.listen (3000, function(){
	console.log('Criado o servidor na porta 3000');
});