var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var coordenadas = lines.shift().split(' ');

var x = parseFloat(coordenadas[0]);
var y = parseFloat(coordenadas[1]);

if(x === 0.0){
    if(y === 0.0){
        console.log("Origem");
    }else{
        console.log("Eixo Y");
    }   
}else if(y === 0.0){
    if(x === 0.0){
        console.log("Origem");
    }else{
        console.log("Eixo X");
    }
}else if(x > 0.0 && y > 0.0){
    console.log("Q1");
}else if(x < 0.0 && y > 0.0){
    console.log("Q2");
}else if(x < 0.0 && y < 0.0){
    console.log("Q3");
}else if(x > 0.0 && y < 0.0){
    console.log("Q4");
}