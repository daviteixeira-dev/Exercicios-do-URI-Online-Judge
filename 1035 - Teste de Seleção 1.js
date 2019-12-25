var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);
var C = parseInt(valores[2]);
var D = parseInt(valores[3]);

if((B > C) && (D > A) && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}