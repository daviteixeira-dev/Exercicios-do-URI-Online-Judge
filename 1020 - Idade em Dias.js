var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var totalDias = parseInt(lines.shift());

var qtdAnos = parseInt(totalDias/365);
totalDias = totalDias % 365;

var qtdMeses = parseInt(totalDias/30);
totalDias = totalDias % 30;

var qtdDias = parseInt(totalDias);

console.log(qtdAnos + " ano(s)");
console.log(qtdMeses + " mes(es)");
console.log(qtdDias + " dia(s)");
