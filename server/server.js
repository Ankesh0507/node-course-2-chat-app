const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const port= process.env.PORT || 3000;

const publicPath = path.join(__dirname , "../public");
 var app = express();

 var server = http.createServer(app);

 app.use(express.static(publicPath));
 
 server.listen(3000,()=>{
     console.log(`server is up on ${port}`);
 });
 