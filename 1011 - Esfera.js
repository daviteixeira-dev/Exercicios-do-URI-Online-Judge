var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Raio = parseFloat(lines.shift());
var pi = 3.14159;

var Volume = ((4/3) * pi * Math.pow(Raio, 3));

console.log("VOLUME = " + parseFloat(Volume).toFixed(3));