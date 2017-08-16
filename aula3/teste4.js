var events = require('events');
function Conta(){
	this.saldo = 0;
	events.EventEmitter.call(this);
	
	this.deposito = function(valor){
		console.log("DEPOSITO - Depositado R$ %d", valor);
		this.saldo += valor;
		this.emit('mudaSaldo');
	};

	this.retirada = function(valor){
		console.log('SAQUE - Sacado R$ %d', valor);
		this.saldo -= valor;
		this.emit('mudaSaldo');
	};
}
Conta.prototype.__proto__ = events.EventEmitter.prototype;

function mostraSaldo(){
	console.log('SALDO - Osaldo da conta é: R$ %d', this.saldo);
}

function testaSaldo(){
	if (this.saldo < 0) {
		console.log('SALDO - Você está no Negativo !!!');
	}
}

function verMeta(conta, meta){
	if (conta.saldo > meta) {
		console.log('META - Sua meta de R$ %d foi alcançada !!!', meta)
	}else{
		console.log('META - Deposite mais R$ %d', meta-conta.saldo);
	}
}

var conta = new Conta();
conta.on("mudaSaldo", mostraSaldo);
conta.on("mudaSaldo", testaSaldo);
conta.on("mudaSaldo", function(){
	verMeta(this,1000);
});
conta.deposito(200);
conta.deposito(320);
conta.deposito(600);
conta.retirada(1200);
