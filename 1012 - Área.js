var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var Valores = lines.shift().split(' ');

var A = parseFloat(Valores[0]);
var B = parseFloat(Valores[1]);
var C = parseFloat(Valores[2]);
var PI = 3.14159;

var Area_Triangulo = (A*C)/2;
var Area_Circulo = PI * Math.pow(C,2);
var Area_Trapezio = ((A+B)/2)*C;
var Area_Quadrado = B*B;
var Area_Retangulo = A*B;

console.log("TRIANGULO: " + parseFloat(Area_Triangulo).toFixed(3));
console.log("CIRCULO: " + parseFloat(Area_Circulo).toFixed(3));
console.log("TRAPEZIO: " + parseFloat(Area_Trapezio).toFixed(3));
console.log("QUADRADO: " + parseFloat(Area_Quadrado).toFixed(3));
console.log("RETANGULO: " + parseFloat(Area_Retangulo).toFixed(3));