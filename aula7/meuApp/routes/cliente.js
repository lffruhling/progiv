var express = require('express');
var router = express.Router();

var Cliente = require("./../modulos/Cliente");

router.get('/', function(req, res){
	/* Faz consulta igual a um select * from tabela*/
	Cliente.find({}, function(err, clientes){
		if(err){
			return;
		}
		res.render('lista',{ title: 'Lista de Clientes', clientes: clientes });
	});
	
});

router.get('/create', function(req, res){
	res.render('novo');
	
});

router.post('/create', function(req,res){
	Cliente.create({
		nome: 				req.body.nome,
		email: 				req.body.email,
		datanasc: 			req.body.datanasc,
		endereco:{
			estado: 		req.body.estado,
			cidade: 		req.body.cidade,
			rua: 			req.body.rua,
			numero: 		req.body.numero,
			bairro: 		req.body.bairro,
			complemento: 	req.body.complemento
		}
	},function(err, cliente){
		if (err) {
			return;
		}
		res.redirect('/cliente/create');
	});
});

router.get('/edit/:id',function(req,res){
	/*pesquisa pelo id*/
	Cliente.findById(req.params.id, function(err, cliente){
		if(err){
			return;
		}
		res.render('edit', cliente);

	});
});

router.post('/edit/:id', function(req,res){
	Cliente.findByIdAndUpdate(req.params.id, { 
		$set: { 
				nome: 				req.body.nome,
				email: 				req.body.email,
				datanasc: 			req.body.datanasc,
				endereco:{
					estado: 		req.body.estado,
					cidade: 		req.body.cidade,
					rua: 			req.body.rua,
					numero: 		req.body.numero,
					bairro: 		req.body.bairro,
					complemento: 	req.body.complemento
				}
			}
		}, 
		{ new: true }, function (err, cliente) {
		  if (err) return handleError(err);
		 res.redirect('/cliente');
	});
});

router.get('/delete/:id',function(req,res){
	/*deleta pelo id*/
	Cliente.deleteOne(req.params.id, function(err, cliente){
		if(err){
			return;
		}
		res.redirect('/cliente');

	});
});

module.exports = router;