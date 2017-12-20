const   express = require('express'),
        socket=  require('socket.io'),
        app = express();

app.get('/', function(req, res){
    res.send('We are live!!');
});

app.listen(3030, function(){
    console.log('chat is live on port 3030');
});