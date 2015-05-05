var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function callback (err, data) {
    if (! err) {
        var newline_counter = data.split('\n').length - 1;
        console.log(newline_counter);
    };
});

