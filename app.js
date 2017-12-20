const   express     = require('express'),
        socket      = require('socket.io'),
        app         = express();

app.use(express.static('public'));

const server = app.listen(3000, function(){
    console.log('Connect with us on PORT 3K');
});

app.get('/', function(req, res){
    res.sendFile('index.html');
});

const io = socket(server);

io.on('connection', function(socket){
    socket.on('greet', function(data){
        console.log(data.say);
    });
});
