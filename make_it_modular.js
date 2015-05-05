var filterLs = require('./make_it_modular_module.js');

var dir = process.argv[2];
var ext = process.argv[3];

function listFiles(err, files) {
    if (err)
        return console.error('There was an error:', err)

    for (i=0; i<files.length; i++) {
        console.log(files[i]);
    }
}

filterLs(dir, ext, listFiles)


