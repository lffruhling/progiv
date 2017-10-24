var express = require('express');
var rotas = express.Router();

rotas.post('/cadastro', function (req,res) {
	res.json({
		mensagem : 'cria'
	});
});

rotas.get('/consulta', function (req,res) {
	res.json({
		mensagem : 'consulta'
	});
});

rotas.delete('/remover', function (req,res) {
	res.json({
		mensagem : 'consulta'
	});
});

module.exports = rotas;