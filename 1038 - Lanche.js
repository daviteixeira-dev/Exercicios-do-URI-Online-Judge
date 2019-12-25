var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var codigo = parseInt(valores[0]);
var quantidade = parseInt(valores[1]);

var preco;

if(codigo === 1){
    preco = 4.00;
}else if(codigo === 2){
    preco = 4.50;
}else if(codigo === 3){
    preco = 5.00;
}else if(codigo === 4){
    preco = 2.00;
}else if(codigo === 5){
    preco = 1.50;
}

console.log("Total: R$ " + (preco * quantidade).toFixed(2));