var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift());

if(valor > 100 || valor < 0){
    console.log("Fora de intervalo");
}else if(valor <= 25.00){
    console.log("Intervalo [0,25]");
}else if(valor <= 50.00){
    console.log("Intervalo (25,50]");
}else if(valor <= 75.00){
    console.log("Intervalo (50,75]");
}else if(valor <= 100){
    console.log("Intervalo (75,100]");
}