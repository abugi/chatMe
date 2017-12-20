const socket = io.connect();

socket.emit('greet', {say: 'Hello everybody', question: 'Whats going on in the house?'});

socket.on('greet', function(data){
    
});
