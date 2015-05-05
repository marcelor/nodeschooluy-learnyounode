var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function callback (err, list) {
    if (! err) {
        filtered = list.filter(function(f) {
            return path.extname(f) == "."+ext;
        });
        for (i=0; i<filtered.length; i++) {
            console.log(filtered[i]);
        };
    };
});

