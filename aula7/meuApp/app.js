var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var conexao require('./modulo');

/* Requisita o mongoose para utilizar o mongoDB*/
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

/* Conexao com o banco de dados mongo -> cria se nao existe */
var db = mongoose.connect('mongodb://localhost/aula7').connection;

/* Testa se a conexao deu certo */
db.on('open', function(){
	console.log('Conexao - OK');
});

db.on('error', function(err){
	console.log('Erro de conexao', err);
});


/* Criando uma nova Colecao -> Tabela*/
var cliente = mongoose.Schema({
	nome:{
		type:String,
		required:true
	},
	endereco:{
		rua:String,
		numero:Number,
		cidade:String,
		estado:String
	},
	datanasc:{
		type:Date,
		required:true,
		default:Date.now
	}

});

/* 
* Campo Virual -> posso criar a partir de outros campos
* schema.virtual('nomedocampo.nomeDoCampoVirtual')
*/

cliente.virtual('endereco.endcompleto').get(function(){
	return this.endereco.rua.concat(', ').concat(this.endereco.numero)
})


/* Executa a criacao 
* Parametros da model('tabela', minhaColecao)*/
var Cliente = mongoose.model('cliente', cliente)

/* Adicionar dados na colecao Cliente*/
Cliente.create({
	nome:'leonardo',
	endereco:{
		rua:'Jose cannelas',
		numero:15,
		cidade:'frederico',
		estado:'RS'
	}
}, function (err, dado) {
	if (err) {
		console.log('Erro ao cadastrar cliente ->', err)
		return
	}
	console.log('Cliente Cadastrado ->', dado)
	console.log('endereco Completo ->', dado.endereco.endcompleto )
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
