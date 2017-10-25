/* Requisita o mongoose para utilizar o mongoDB*/
var mongoose = require('mongoose');

/* Criando uma nova Colecao -> Tabela*/
var Cliente = mongoose.Schema({
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

/* Exporta a colecao para ser manipulada externamente*/
module.exports = mongoose.model('Cliente', Cliente);