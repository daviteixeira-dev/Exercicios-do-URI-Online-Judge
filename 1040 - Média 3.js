var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var notas = lines.shift().split(' ');

var N1 = parseFloat(notas[0]).toFixed(1);
var N2 = parseFloat(notas[1]).toFixed(1);
var N3 = parseFloat(notas[2]).toFixed(1);
var N4 = parseFloat(notas[3]).toFixed(1);

var media = parseFloat(((N1*2) + (N2*3) + (N3*4) + (N4*1))/10).toFixed(1);
var notaExame = parseFloat(lines.shift()).toFixed(1);

if(media >= 7.0){
    console.log("Media: " + parseFloat(media).toFixed(1));
    console.log("Aluno aprovado.");
}else if(media < 5.0){
    console.log("Media: " + parseFloat(media).toFixed(1));
    console.log("Aluno reprovado.");

}else{
    console.log("Media: " + parseFloat(media).toFixed(1));
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + parseFloat(notaExame).toFixed(1));

    media = ((media/2.0) + (notaExame/2.0)).toFixed(1);
    
    if(media >= 5.0){
        console.log("Aluno aprovado.");
    }else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + parseFloat(media).toFixed(1));
}