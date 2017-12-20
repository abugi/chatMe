const socket = io();

socket.emit('new', 'This is a new dawn!');