/* Requisita o mongoose para utilizar o mongoDB*/
var mongoose = require('mongoose');

/* Conexao com o banco de dados mongo -> cria se nao existe */
var db = mongoose.connect('mongodb://localhost/aula7').connection;

/* Testa se a conexao deu certo */
db.on('open', function(){
	console.log('Conexao - OK');
});

db.on('error', function(err){
	console.log('Erro de conexao', err);
});

return db;

