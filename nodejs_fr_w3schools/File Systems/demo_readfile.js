const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'content-type': 'text/html'});
        return res.end(data);
    })

    fs.appendFile('data.txt',"Data ", (err)=>{
        if(err) throw err;
        console.log("Saved");
    })

    // fs.unlink('data.txt', (err)=>{
    //     if(err) throw err;
    //     console.log("Deleted");
    // })
}).listen(8080);