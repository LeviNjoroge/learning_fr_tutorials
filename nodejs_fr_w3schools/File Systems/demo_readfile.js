const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'content-type': 'text/html'});
        return res.end(data);
    })
}).listen(8080);