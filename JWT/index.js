const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();

app.get("/api", (req, res) => {
        res.json({
                massage: "Hey there! Welcome to this API server",
        });
});

app.post("/api/posts", verifyToken, (req, res) => {
        jwt.verify(req.token, "secretkey", (err, authData) => {
           if(err){
                res.sendStatus(403); //forbidden
           } else {
                res.json({
                        massage: "Posts created....",
                        authData,
                });
           }
        });
});

app.post("/api/login", (req, res) => {
        const user = {
                id: 1,
                username: "sonu",
                email: "kumar@csegmai.com"
        };

        jwt.sign({ user: user }, "secretkey", (err, token) => {
                res.json({
                        token,
                });
        });
});

function verifyToken(req, res, next) {
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !== "undefined") {
                const bearerToken = bearerHeader.split(" ")[1];
                req.token = bearerToken;
                next();
        } else {
                res.sendStatus(403); //forbidden
        }
}

app.listen(8303, (req, res) => {
  console.log("server started on port 8303"); 
});