var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    //this is the head of the response
    res.writeHead(
        200, 
        {
        'Content-Type': 'text/html'
        });
        
    //this is the body of the response
    res.write()    
}

)