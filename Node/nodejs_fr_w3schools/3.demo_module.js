var http = require('http');
var dt = require('./2.myfirstmodule');

http.createServer(function (req, res) {
    //this is the head of the response
    res.writeHead(
        200, 
        {
        'Content-Type': 'text/html'
        });

    //this is the body of the response
    res.write("The date and time are currently: <br>"+dt.myDateTime())
    
    res.end();
}
).listen(8080);