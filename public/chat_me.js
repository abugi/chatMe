const socket = io.connect();

const newData = document.querySelector('#newData');

socket.emit('greet', {say: 'Hello everybody', question: 'Whats going on in the house?'});

socket.on('greet', function(data){
    newData.innerHTML = data.say;
});
