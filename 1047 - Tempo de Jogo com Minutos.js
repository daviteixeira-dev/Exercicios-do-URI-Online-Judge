var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var horas = lines.shift().split(' ');

var horaIni = parseInt(horas[0]);
var minuIni = parseInt(horas[1]);
var horaFin = parseInt(horas[2]);
var minuFin = parseInt(horas[3]);

var horaTotal = horaFin - horaIni;
var minuTotal = minuFin - minuIni;

if(horaTotal < 0){
    horaTotal += 24;
}

if(minuTotal < 0){
    minuTotal += 60;
    horaTotal -= 1;
}

if(minuTotal === 0 && horaTotal === 0){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
    console.log("O JOGO DUROU "+ (horaTotal) +" HORA(S) E "+ (minuTotal) +" MINUTO(S)");
}
