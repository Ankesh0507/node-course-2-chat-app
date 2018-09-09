const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });


//   socket.emit('newEmail', {
//     from: 'ankesh0507.com',
//     text: 'hello ankesh',
//     createAt: 123
    
// socket.emit('newEmail',{
//     from: 'client',
//     text: 'hello ankesh how r u'
// });

// socket.emit('newMessage',{
//     from:'mayank',
//     text:'hello mayank'
// });

  // socket.on('createMessage',(message)=>{
  //     console.log('createMessage',message);
  //     io.emit('newMessage',{
  //         from : message.from,
  //         text : message.text,
  //         createdAt : new Date().getTime()
  //     })
  // });

//   socket.on('createEmail', (newEmail) => {
//     console.log('createEmail', newEmail);
//   });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
