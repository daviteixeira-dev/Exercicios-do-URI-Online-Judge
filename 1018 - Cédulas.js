var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines.shift());

console.log(numero);
console.log(parseInt(numero/100) + " nota(s) de R$ 100,00");

numero = numero % 100;
console.log(parseInt(numero/50) + " nota(s) de R$ 50,00");
numero = numero % 50;
console.log(parseInt(numero/20) + " nota(s) de R$ 20,00");
numero = numero % 20;
console.log(parseInt(numero/10) + " nota(s) de R$ 10,00");
numero = numero % 10;
console.log(parseInt(numero/5) + " nota(s) de R$ 5,00");
numero = numero % 5;
console.log(parseInt(numero/2) + " nota(s) de R$ 2,00");
numero = numero % 2;
console.log(parseInt(numero/1) + " nota(s) de R$ 1,00");