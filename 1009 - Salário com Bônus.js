var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nomeVendedor = String(lines.shift());
var salarioFixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift());

var comissao = vendas * 0.15;

var novoSalario = salarioFixo + comissao;

console.log("TOTAL = R$ " + novoSalario.toFixed(2));