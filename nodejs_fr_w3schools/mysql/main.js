require('dotenv').config();
const mysql = require('mysql');

const conn = mysql.createConnection({
        host:'localhost',
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD
    })

console.log("Your username is: "+process.env.DB_USERNAME)
console.log("Your password is:"+process.env.DB_PASSWORD)

conn.connect((err)=>{
    if(err)throw err;
    console.log("Connected!")
})