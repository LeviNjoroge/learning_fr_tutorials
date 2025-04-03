const http = require('http');
const url = require('url');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(8080);