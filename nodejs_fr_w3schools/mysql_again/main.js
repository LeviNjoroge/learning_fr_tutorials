require('dotenv').config();

const http = require('http');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected")
})

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080, ()=>{console.log('Server running on: http://localhost:8080')});