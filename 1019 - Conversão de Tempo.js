var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valorSegundos = parseInt(lines.shift());

var qtdHoras = parseInt(valorSegundos/3600);
valorSegundos = valorSegundos % 3600;

var qtdMinutos = parseInt(valorSegundos/60);
valorSegundos = valorSegundos % 60;

var qtdSegundos = parseInt(valorSegundos);

console.log(qtdHoras + ":" + qtdMinutos + ":" + qtdSegundos);