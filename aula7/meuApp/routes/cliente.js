var express = require('express');
var router = express.Router();

var Cliente = require("./../modulos/Cliente");

router.get('/find', function(req, res){
	/* Faz consulta igual a um select * from tabela*/
	Cliente.find({}, function(err, clientes){
		if(err){
			return;
		}
		res.send(clientes);
		
	});
});

router.get('/find/nome/:nome',function(req,res){
	/*Retorna apena um registro*/
	Cliente.findOne({
		nome: req.params.nome
	}, function(err, cliente){
		if(err){
			return;
		}
		//res.send(cliente);
		res.render('cliente', cliente);
	});
});

router.get('/find/id/:id',function(req,res){
	/*pesquisa pelo id*/
	Cliente.findById(req.params.id, function(err, cliente){
		if(err){
			return;
		}
		// res.send(cliente);
		res.render('cliente', cliente);

	});
});

/*posso usar post, put tmb*/
router.get('/save/:nome',function(req,res){
	var cliente = new Cliente({
		nome: req.params.nome
	});

	Cliente.save(cliente, function(err, cliente){
		if(err){
			return;
		}
		res.send(cliente);
	})
});

router.get('/create/:nome', function(req,res){
	Cliente.create({
		nome:req.params.nome
	},function(err, cliente){
		if (err) {
			return;
		}res.send(cliente);
	});
});

module.exports = router;