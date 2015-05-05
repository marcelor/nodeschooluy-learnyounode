var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
        if (err)
            return callback(err)

        filtered = data.filter(function(f) {
            return path.extname(f) == "."+ext;
        });
        return callback(null, filtered);
    });
}

