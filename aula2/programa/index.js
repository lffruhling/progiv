var express = require('express');
var app = express();
var censor = require('aula2');

app.get('/frase', function(req, res){
	var frase = req.query.frase;
	res.send(censor.censor(frase));
});

app.get('/listar', function(req, res){
	res.send(censor.listarCensura());s
});

app.get('/adicionar', function(req, res){
	var palavra = req.query.palavra;
	censor.adicionaPalCens(palavra);
	res.send("Palavra Adicionado!");
});

app.listen(3000, function(){
	console.log('Servidor Iniciado!');
});