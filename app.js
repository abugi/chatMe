const   express = require('express'),
        socket=  require('socket.io'),
        app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('index.html');
});

const server = app.listen(3030, function(){
    console.log('chat is live on port 3030');
});

const io = socket(server);

io.on('connection', function(socket){
    socket.on('greeting', function(data){
        console.log(data);
    });
});
