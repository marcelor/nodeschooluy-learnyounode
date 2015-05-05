var http = require('http');

var url = process.argv[2];

function displayData(response) {
    response.on("data", function(data) {
        console.log(data.toString());
    });
}

http.get(url, displayData);
