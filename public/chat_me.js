const socket = io();

const
userName = document.querySelector('input');
button = document.querySelector('button');

button.addEventListener('click', function(){
    socket.emit('username', {username: userName.value});
});