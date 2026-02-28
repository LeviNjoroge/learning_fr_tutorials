require('dotenv').config();

const http = require('http');
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected: "+process.env.DB_DATABASE)
})

let allStudents;
conn.query('SELECT fname FROM students',(err, result)=>{
    if(err) throw err;
    console.log('query worked!');
    console.log(result)
    allStudents = result;
})

http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080, ()=>{console.log('Server running on: http://localhost:8080')});