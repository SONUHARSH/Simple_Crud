const express = require("express");
const mysql = require("mysql");

const app = express();

//create connection
const db= mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
});

// connect to mysql
db.connect((err) => {
        if(err) {
                throw err;
        }
        console.log("MySql Connected");
});



//cerate database
app.get("/created", (req, res) => {
        let sql = "CREATE DATABASE nodemysql";
        db.query(sql, (err) => {
                if(err) {
                        throw err;
                }
                res.send("Database Created");
        });
});

app.listen(8304, (req, res) => {
        console.log("server started on port 8304"); 
});