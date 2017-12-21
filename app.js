const 
express     = require('express'),
socket      = require('socket.io'),
app         = express(),
usernames   = [];

const dir = __dirname;

app.use(express.static(dir + '/public'));

app.get('/', function(req, res){
    res.sendFile(dir + '/index.html');
});

const server = app.listen(3000, function(){
    console.log('lets chat on PORT 3K');
});

const io = socket(server); 

io.on('connection', function(socket){
    socket.on('username', function(username, cb){
        if(usernames.indexOf(username) != -1){
            cb = false;
        }else{
            cb = true;
            usernames.push(username);
            updateUserNames();
        }
    });
});

function updateUserNames(){
    io.sockets.emit('username', usernames);
};