var http 	= require('http');
var fs 		= require('fs'); //file system, faz leitura de arquivos

var server = http.createServer(servidor);

/*
 * req = requisicao
 * res = resposta
 */
function servidor (req, res) {
	/* Retorna o verbo http de retorno*/
	// res.writeHead(200);
	
	/* Chama Arquivo */
	// res.end(fs.readFileSync('view/index.html'));
	
	/* Recebe URL do navegador */
	// res.end(req.url);

	var url = req.url;

	var query = req.url.query;
	if (url == '/') {
		res.writeHead(200);
		res.end(query);
	}else if (url == '/contatos') {
		res.writeHead(200);
		res.end('Contatos')
	}else{
		res.writeHead(404);
		res.end('Pagina nao encontrada!')
	}
}

function status(){
	console.log('Servidor Online');
}

server.listen(3000, status);