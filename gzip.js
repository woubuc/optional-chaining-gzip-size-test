const fs = require('fs');
const zlib = require('zlib');

function gzip(file) {
    console.log('Gzipping', file);
    
    const input = fs.createReadStream('./bundles/' + file);
    const output = fs.createWriteStream('./bundles/' + file + '.gz');
    
    input.pipe(zlib.createGzip()).pipe(output);
}

gzip('babel.js');
gzip('lodash.js');
