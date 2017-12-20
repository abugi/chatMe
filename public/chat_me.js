const socket = io.connect();

socket.emit('greet', {say: 'Hello everybody'});
