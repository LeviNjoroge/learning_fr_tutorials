const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let file = "."+q.pathname;
    fs.readFile(file, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-type':'text/html'});
            return res.end("404 Not Found <br>"+err);
        }
        res.writeHead(200, {'content-type':'text/html'});
        return res.end(data);
    })
}).listen(8080);