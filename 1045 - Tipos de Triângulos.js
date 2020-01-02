var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var aux;

if(A < B){ aux = A; A = B; B = aux; }
if(A < C){ aux = A; A = C; C = aux; }
if(B < C){ aux = B; B = C; C = aux; }

if(A >= B + C){
    console.log("NAO FORMA TRIANGULO");
}else{
    if(Math.pow(A,2) == Math.pow(B,2) + Math.pow(C,2)) console.log("TRIANGULO RETANGULO");
    if(Math.pow(A,2) > Math.pow(B,2) + Math.pow(C,2)) console.log("TRIANGULO OBTUSANGULO");
    if(Math.pow(A,2) < Math.pow(B,2) + Math.pow(C,2)) console.log("TRIANGULO ACUTANGULO");
    if(A === B && B === C) console.log("TRIANGULO EQUILATERO");
    else if(A === B || B === C || C === A) console.log("TRIANGULO ISOSCELES");
}