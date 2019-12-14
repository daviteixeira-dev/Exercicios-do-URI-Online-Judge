var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var qtdHoras = parseInt(lines.shift());
var velocidadeMedia = parseInt(lines.shift());

var totalKlm = qtdHoras * velocidadeMedia;

var qtdLitros = (totalKlm/12.0).toFixed(3);

console.log(qtdLitros);