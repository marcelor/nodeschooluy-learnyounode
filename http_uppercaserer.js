var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

function onConnect(request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    };
};

var server = http.createServer(onConnect);
server.listen(port);
