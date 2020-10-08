
function calcular(){
    let valor1 = parseFloat(document.op.valor1.value);
    let valor2 = parseFloat(document.op.valor2.value);
    let valor3 = parseInt(document.op.valor3.value);
    let resultado = 0;

    if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) { //A função isNaN () determina se um valor é um número ilegal (Não é um número).
       alert('Números inválidos!');
    }
    else{
 
       switch(valor3){
          case 1:
              resultado = valor1 + valor2;
               
              break;
          case 2:
              resultado = valor1 * valor2;
              
              break;
          case 3:
             if(valor2 === 0){
                alert('Não permite-se divisão por zero!');
                resultado = "";
                break;
             }
             resultado = valor1 / valor2;
 
              break;
 
          default:
              resultado = 0;
              alert('Inválido!');
      }
      
      document.op.resultado.value = resultado;
 
    }
      
 }