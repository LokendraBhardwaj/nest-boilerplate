$(function () {
  const socket = io('http://localhost:4200');

  socket.on('connect', function () {
    console.log('Connected');
  });
  
  socket.on('disconnect', function () {
    console.log('Disconnected');
  });

  socket.on('receiveMessage', function (data) {
    console.log('receiveMessage', data);
    $(".message__area").find("ul").append(`<li>${data}</li>`);
  });

  $("#sendMessage").click(function(){
    var message = $("#messageBox").val();
    socket.emit('sendMessage', message);
    var message = $("#messageBox").val("");
  })

});
