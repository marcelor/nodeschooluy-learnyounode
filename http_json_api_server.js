var http = require('http');
var url = require('url');

var port = process.argv[2];

function onConnect(request, response) {
   if (request.method == 'GET') {
        var query_data = url.parse(request.url, true);
        switch(query_data.pathname) {
            case '/api/parsetime':
                var query_date = new Date(query_data.query.iso);
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.write(JSON.stringify({
                    "hour": query_date.getHours(),
                    "minute": query_date.getMinutes(),
                    "second": query_date.getSeconds()
                }));
                break;
            case '/api/unixtime':
                var query_date = new Date(query_data.query.iso)
                response.writeHead(200, { 'Content-Type': 'application/json'});
                response.write(JSON.stringify({
                    "unixtime": query_date.getTime()
                }));
                break;
            default:
                response.writeHead(404);
                response.write('url is not supported');
        }
        response.end();
    };
};

var server = http.createServer(onConnect);
server.listen(port);
