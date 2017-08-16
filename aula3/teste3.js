var fs = require("fs");
fs.stat("teste.js", function(err, stats){
	if (stats) { 
		console.log("teste.js existe");
	}
});

setImmediate(function(){
	console.log('Temporizador imediato 1 executado');
});

setImmediate(function(){
	console.log('Temporizador imediato 2 executado');
});
process.nextTick(function(){
	console.log('Next Tick 1 executado');
});
process.nextTick(function(){
	console.log('Next Tick 2 executado');
});