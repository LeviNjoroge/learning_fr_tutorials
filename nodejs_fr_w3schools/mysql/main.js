require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection(
    {
        host:'localhost',
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD
    }
)

conn.connect((err)=>{
    if(err)throw err;
    console.log("Connected!")
})