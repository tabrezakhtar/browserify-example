var lev = require('levenshtein');

var l = new lev('cat', 'dog');

console.log(l.distance);