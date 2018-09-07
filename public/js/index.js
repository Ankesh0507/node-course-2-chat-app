var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'ankesh',
  //   text: 'hello ankesh how are you'
  // });
});

// socket.on('sendMessage',{
//     from: 'client',
//     text: 'hello server how are you'
// });

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('NewMessage', message);
  });