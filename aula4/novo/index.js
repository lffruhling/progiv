var express = require('express');
var app = express();

var rotas = require('./rotas');

app.use(rotas);

// app.get('/',function(req,res){
// 	res.send('Ola Mundo!')
// });

app.listen(3000, function(){
	console.log('Servidor Online!');
});