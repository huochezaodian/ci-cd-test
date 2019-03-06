const http = require('http');
const fs = require('fs');
http.createServer((req,res) => {
	//console.log(req.url);
	var url = ( req.url == '/'?'/index':req.url ).replace(/^\//,'');
	//console.log(url);
	fs.readFile(url+'.html',(err,data) => {
		//console.log(err);
		if(err){
			res.write("404");
		}else{
			res.write(data);
		}
		res.end();
	});
}).listen(8081);