var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var horas = lines.shift().split(' ');

var n1 = parseInt(horas[0]);
var n2 = parseInt(horas[1]);

if(n1 == n2){ 
    console.log("O JOGO DUROU 24 HORA(S)");
}else if(n2 > n1){
    console.log("O JOGO DUROU "+ (n2 - n1) + " HORA(S)");
}else if(n1 > n2){
    console.log("O JOGO DUROU "+ ((n2 + 24) - n1) + " HORA(S)");
}