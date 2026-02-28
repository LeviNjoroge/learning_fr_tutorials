const http = require('http');
const url = require('url');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'html'});
    let q = url.parse(req.url, true).query;
    res.write("Hello world, my name is: "+q.name);
    res.end();
}).listen(8080);