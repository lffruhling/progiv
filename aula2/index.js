var palavrasCensuradas = ['puta','vadia','bixa'];
var palavrasCensuradasPersonalizadas = [ ];

function censor(frase){
	for (indicie in palavrasCensuradas) {
		frase = frase.replace(palavrasCensuradas[indicie],"****")
	}

	for (indicie in palavrasCensuradasPersonalizadas) {
		frase = frase.replace(palavrasCensuradasPersonalizadas[indicie],"****")
	}

	return frase;
}

function listarCensura(){
	return palavrasCensuradas.concat(palavrasCensuradasPersonalizadas);
}

function adicionaPalvrasCensuradas(palavra){
	palavrasCensuradas.push(palavra);
}


/*
	Libera acesso externo para as funções do modulo
*/
exports.censor = censor;
exports.listarCensura = listarCensura;
exports.adicionaPalvrasCensuradas = adicionaPalvrasCensuradas;