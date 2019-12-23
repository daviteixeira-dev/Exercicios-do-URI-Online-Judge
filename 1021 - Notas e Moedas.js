var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero = parseFloat(lines.shift()).toFixed(2);

console.log("NOTAS:");
console.log(parseInt(numero/100) + " nota(s) de R$ 100.00");
numero = (numero % 100.0) + 0.00001;
console.log(parseInt(numero/50) + " nota(s) de R$ 50.00");
numero = (numero % 50.0) + 0.00001;
console.log(parseInt(numero/20) + " nota(s) de R$ 20.00");
numero = (numero % 20.0) + 0.00001;
console.log(parseInt(numero/10) + " nota(s) de R$ 10.00");
numero = (numero % 10.0) + 0.00001;
console.log(parseInt(numero/5) + " nota(s) de R$ 5.00");
numero = (numero % 5.0) + 0.00001;
console.log(parseInt(numero/2) + " nota(s) de R$ 2.00");

numero = numero * 100.0;
console.log("MOEDAS:");

console.log(parseInt(numero/100) + " moeda(s) de R$ 1.00");
numero = (numero % 100.0) + 0.00001;
console.log(parseInt(numero/50) + " moeda(s) de R$ 0.50");
numero = (numero % 50.0) + 0.00001;
console.log(parseInt(numero/25) + " moeda(s) de R$ 0.25");
numero = (numero % 25.0) + 0.00001;
console.log(parseInt(numero/10) + " moeda(s) de R$ 0.10");
numero = (numero % 10.0) + 0.00001;
console.log(parseInt(numero/5) + " moeda(s) de R$ 0.05");
numero = (numero % 5.0) + 0.00001;
console.log(parseInt(numero/1) + " moeda(s) de R$ 0.01");