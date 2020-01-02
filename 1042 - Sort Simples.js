var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var n1 = parseInt(valores[0]);
var n2 = parseInt(valores[1]);
var n3 = parseInt(valores[2]);

var a = n1, b = n2, c = n3, aux;

if(n1 > n2){
    aux = n1;
    n1 = n2;
    n2 = aux;
}

if(n1 > n3){
    aux = n1;
    n1 = n3;
    n3 = aux;
}

if(n2 > n3){
    aux = n2;
    n2 = n3;
    n3 = aux;
}

console.log(n1);
console.log(n2);
console.log(n3);
console.log("");
console.log(a);
console.log(b);
console.log(c);