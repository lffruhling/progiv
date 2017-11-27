/* Requisita o mongoose para utilizar o mongoDB*/
var mongoose = require('mongoose');

/* Criando uma nova Colecao -> Tabela*/
var Cliente = mongoose.Schema({
	nome:{
		type:String,
		required:true
	},
	email:String,
	datanasc:{
		type:Date,
		required:true,
		default:Date.now
	},
	endereco:{
		estado:String,
		cidade:String,
		rua:String,
		numero:Number,
		bairro:String,
		complemento: String
	}
	

});

/* Exporta a colecao para ser manipulada externamente*/
module.exports = mongoose.model('Cliente', Cliente);