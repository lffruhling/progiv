var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', './views')

// Cria uma pasta publica
app.use('/arquivo', express.static('public'));

/* 	
* Cria um midleware e filta todas as requisicoes
* Sempre vai interceptar as requisicoes
* next -> qual caminho seguir apos passar pelo midleware
* Sempre deve estar em cima das demais rotas devido ao linha a linha
*/
app.use(function (req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

app.get('/', function(req, res){
	res.send('Ola mundo');
});

app.get('/contatos', function(req, res){
	// res.send('Contatos');
	res.render('index',{
		titulo: 'Contatos',
		mensagem: 'Lista de contatos',
		itens: ['telefone','email']
	})
});

app.get('/erro', function(req, res, next){
	next(new Error('Errou!'));
});

/*
* Midleware de erro
*/
app.use(function(err,req,res,next){
	res.status(500).json({
		mensagem: ''+err.message+''
	});
});

app.listen(3000, function (argument) {
	console.log('Conectado');
});