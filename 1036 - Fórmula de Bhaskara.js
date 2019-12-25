var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var A = parseFloat(valores[0]);
var B = parseFloat(valores[1]);
var C = parseFloat(valores[2]);

var Delta = Math.pow(B,2) - 4 * A * C;

if((A === 0) || (Delta < 0)){
    console.log("Impossivel calcular");
}else{
    var raiz01 = (((-B) + Math.sqrt(Delta))/(2*A)).toFixed(5);
    var raiz02 = (((-B) - Math.sqrt(Delta))/(2*A)).toFixed(5);

    console.log("R1 = " + raiz01);
    console.log("R2 = " + raiz02);
}