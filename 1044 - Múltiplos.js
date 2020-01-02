var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valores = lines.shift().split(' ');

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);

if(B%A === 0 || A%B === 0){
    console.log("Sao Multiplos");
}else{
    console.log("Nao sao Multiplos");
}