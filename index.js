const express = require('express');
const app = express();
const env = require('dotenv').config()
const db =require('./config/db')
db()







app.listen(process.env.PORT,()=>{
    console.log(`server is running in port 3000 \n http://localhost:${process.env.PORT}`);
})