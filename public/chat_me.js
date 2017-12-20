const socket = io.connect();

const button = document.querySelector('button');

button.addEventListener('click', function(){
    socket.on('greeting', function (data) {
        socket.emit('greeting', {greet: 'Hello everyone'});
    });
});