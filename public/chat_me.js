const socket    = io();

const
userName        = document.querySelector('input'),
button          = document.querySelector('button'),
userRegister    = document.querySelector('#user-register'),
chatContainer   = document.querySelector('#chat-container'),
messagesDisplay = document.querySelector('#messages-display'),
messageInput    = document.querySelector('#message-input'),
send            = document.querySelector('#send'),
online          = document.querySelector('#online'),
offline         = document.querySelector('#offline');

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

 socket.on('offline', function(data){
     var html = '';
     for(var i = 0; i < data.length; i++){
         html += data[i];
     };
     offline.innerHTML += html + '<br>';
 });

 send.addEventListener('click', function(){
     socket.emit('message', messageInput.value);
 });

 socket.on('message', function(message){
     conaole.log(message);
    //  messagesDisplay.innerHTML += '<P>' + message + '</p>';
 });