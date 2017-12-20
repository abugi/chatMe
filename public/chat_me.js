const socket = io.connect();

socket.on('greenting', function(data){
    socket.emit('greeting', 'Hello everyone')
});