var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

if(A + B > C && B + C > A && A + C > B){
    console.log("Perimetro = " + (A + B + C).toFixed(1));
}else{
    console.log("Area = " + (((A + B) * C)/2).toFixed(1));
}