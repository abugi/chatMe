const socket = io.connect();

const data = document.querySelector('#data');

socket.emit('greet', {say: 'Hello everybody'});

socket.on('greet', function(data){
    data.innerHTML = data.say;
});
