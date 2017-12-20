const socket = io();

const
userName = document.querySelector('input');
button = document.querySelector('button');
userRegister = document.querySelector('#user-register');
chatContainer = document.querySelector('#chat-container');

button.addEventListener('click', function(){
    socket.emit('username', {username: userName.value});
    userRegister.classList.add('user-register');
    chatContainer.classList.remove('chat-container');

});

socket.on('username', function(username){
    console.log(username);
});