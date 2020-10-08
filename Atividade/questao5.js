
function calcular(){
    let nome = (document.op.nome.value);
    let valor1 = parseFloat(document.op.nota1.value);
    let valor2 = parseFloat(document.op.nota2.value);
    let valor3 = parseFloat(document.op.nota3.value);
    let resultado = "";
    let media = 0;
    let aprovado = "";

    if(isNaN(valor1) || (isNaN(valor2)) || (isNaN(valor3))) { //A função isNaN () determina se um valor é um número ilegal (Não é um número).
       alert('Informe um número válido!');
    }
    else if(nome === ""){
       alert('Informe um nome!');
 
    }
    else{
      media = ( valor1 + valor2 + valor3) / 3;
      resultado = nome + " " + media.toFixed(2); //tratamento de casas decimais 
 
    if(media >= 8){
       aprovado = "Aluno aprovado!";
       
    }
    else{
       aprovado = "Aluno não aprovado";
    }
      
      document.op.aprovado.value = aprovado;
      document.op.resultado.value = resultado;
 
    }
 
 }