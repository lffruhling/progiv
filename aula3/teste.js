function simpleTimeout(consoleTimer){
	console.timeEnd(consoleTimer);
}

console.time("Dois Segundos");
setTimeout(simpleTimeout, 2000, "Dois Segundos");

console.time("Um Segundo");
setTimeout(simpleTimeout, 1000, "Um Segundo");

console.time("Cinco Segundos");
setTimeout(simpleTimeout, 5000, "Cinco Segundos");

console.time("Cinquenta mili");
setTimeout(simpleTimeout, 50, "Cinquenta mili");