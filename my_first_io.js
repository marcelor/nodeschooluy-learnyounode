var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

var newline_counter = buffer.toString().split('\n').length - 1;
console.log(newline_counter);
