const 
express     = require('express'),
socket      = require('socket.io'),
app         = express();

const dir = __dirname;

app.use(express.static(dir + '/public'));

app.get('/', function(req, res){
    res.sendFile(dir + '/index.html');
});

const server = app.listen(3000, function(){
    console.log('lets chat on PORT 3K');
});

const socket 