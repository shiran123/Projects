const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const users = [
    {"email":"kamal@gmail.com","username":"kamal","id":"1111","password":"345457asd"},
    {"email":"yasanka@gmail.com","username":"yasanka","id":"2222","password":"345098fgh"},
    {"email":"nirmal@gmail.com","username":"nirmal","id":"3333","password":"724058kju"}
];

app.get('/api',(req,res)=>{
    res.json({
        message:"Hello there, this is first route"
    });
});

app.post('/api/login',(req,res)=>{
    console.log('req data',req.body.password,req.body.email);
    users.filter(user=>{
        if(user.email===req.body.email && user.password===req.body.password)
        {
            console.log(user);

            let payload = {
                "id":user.id
            }

            jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'10h'},(err,token)=>{
                res.json({
                    token:token
                });
            });

        }
    });
});

app.post('/api/posts',verifyToken,(req,res)=>{

    jwt.verify(req.token,process.env.SECRET_KEY,(err,authData)=>{

        if(err)
        {
            res.sendStatus(403);
            console.log("Error --> ",err);
        }
        else
        {
            res.json({
                message:"blog posted!!!",
                authData:authData
            });
        }

    });

});

function verifyToken(req,res,next)
{

    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader!=='undefined')
    {
        let bearer = bearerHeader.split(' ');
        let bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403);
    }

};

app.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started on port ${process.env.SERVER_PORT}`);
});