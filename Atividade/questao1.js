
function calcular(){

let valor1        = parseFloat(document.operacao.valor1.value);
let valor2        = parseFloat(document.operacao.valor2.value);
let valor3        = parseFloat(document.operacao.valor3.value);
let resultado = 0;

if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
    alert('Valores inválidos!');
}else{
    resultado = (valor1 + valor2 + valor3)/3;
    document.operacao.resultado.value = resultado;

 }
}




