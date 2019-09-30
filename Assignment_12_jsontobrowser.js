var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('Sample.json',function (err, data){
        res.writeHead(200, {'Content-Type': 'application/json'});
		var jsonObj={
			name:Hemalatha,
		    company:cts
		};
        
        res.end(JSON.stringify(jsonObj));
    });
}).listen(8000);
