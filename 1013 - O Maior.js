var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Valores = lines.shift().split(' ');

var A = parseInt(Valores[0]);
var B = parseInt(Valores[1]);
var C = parseInt(Valores[2]);

var maiorAB = (A + B + Math.abs(A - B))/2;
var maiorABC = (maiorAB + C + Math.abs(maiorAB - C))/2;

console.log(maiorABC + " eh o maior");