var net = require('net');
var strftime = require('strftime');

var port = process.argv[2];

function onConnect(socket) {
    socket.end(strftime('%F %H:%M', new Date())) // => 2011-06-07 18:51
};

var server = net.createServer(onConnect);
server.listen(port);
