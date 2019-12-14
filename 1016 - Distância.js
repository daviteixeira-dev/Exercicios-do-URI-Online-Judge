var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseInt(lines.shift());
var quantidade_minutos = (60 * distancia)/30;

console.log(quantidade_minutos + " minutos");