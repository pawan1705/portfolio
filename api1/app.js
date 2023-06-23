import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

import UserRouter from './routes/user.router.js';
app.use("/user",UserRouter);

app.listen(3002);
console.log("http://localhost:3002");