var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var completed_urls = 0;
var content = [];

function displayContent() {
    for (var i=0; i<3; i++) {
        console.log(content[i]);
    }
};

function http_get(i) {
    http.get(urls[i], function(response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            completed_urls += 1;
            content[i] = data.toString();

            if (completed_urls == 3) {
                displayContent();
            };
        }));
    });
};

for (var i=0; i<3; i++) {
    http_get(i);
};
