const socket    = io();

const
userName        = document.querySelector('input'),
button          = document.querySelector('button'),
userRegister    = document.querySelector('#user-register'),
chatContainer   = document.querySelector('#chat-container'),
online          = document.querySelector('#online');

button.addEventListener('click', function(){
    socket.emit('username', userName.value);
    userRegister.classList.add('user-register');
    chatContainer.classList.remove('chat-container');

});

socket.on('username', function(usernames){
    var html = '';
    for(var i = 0; i < usernames.length; i++){
        html += usernames[i] + '<br>';
    }
    online.innerHTML = html;
 });