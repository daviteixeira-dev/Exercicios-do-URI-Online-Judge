var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var novoSalario;
var reajuste;
if(salario <= 400.00){
    reajuste = salario * 0.15;
    novoSalario = salario + reajuste;

    console.log("Novo salario: " + (novoSalario).toFixed(2));    
    console.log("Reajuste ganho: " + (reajuste).toFixed(2));
    console.log("Em percentual: 15 %");
}else if((salario > 400.00) && (salario <= 800.00)){
    reajuste = salario * 0.12;
    novoSalario = salario + reajuste;

    console.log("Novo salario: " + (novoSalario).toFixed(2));    
    console.log("Reajuste ganho: " + (reajuste).toFixed(2));
    console.log("Em percentual: 12 %");
}else if((salario > 800.00) && (salario <= 1200.00)){
    reajuste = salario * 0.10;
    novoSalario = salario + reajuste;

    console.log("Novo salario: " + (novoSalario).toFixed(2));    
    console.log("Reajuste ganho: " + (reajuste).toFixed(2));
    console.log("Em percentual: 10 %");
}else if((salario > 1200.00) && (salario <= 2000.00)){
    reajuste = salario * 0.07;
    novoSalario = salario + reajuste;

    console.log("Novo salario: " + (novoSalario).toFixed(2));    
    console.log("Reajuste ganho: " + (reajuste).toFixed(2));
    console.log("Em percentual: 7 %");
}else if(salario > 2000.00){
    reajuste = salario * 0.04;
    novoSalario = salario + reajuste;

    console.log("Novo salario: " + (novoSalario).toFixed(2));    
    console.log("Reajuste ganho: " + (reajuste).toFixed(2));
    console.log("Em percentual: 4 %");
}