var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var primeiro = lines.shift().split(' ');
var segundo =  lines.shift().split(' ');

var codPeca1 = parseInt(primeiro[0]);
var qtdPeca1 = parseInt(primeiro[1]);
var valorPeca1 = parseFloat(primeiro[2]);

var codPeca2 = parseInt(segundo[0]);
var qtdPeca2 = parseInt(segundo[1]);
var valorPeca2 = parseFloat(segundo[2]);

var custoTotal = ((qtdPeca1 * valorPeca1) + (qtdPeca2 * valorPeca2));

console.log("VALOR A PAGAR: R$ " + parseFloat(custoTotal).toFixed(2));