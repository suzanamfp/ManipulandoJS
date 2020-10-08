

function calcula(salario, reajuste, resultado){

    x = parseFloat(document.getElementById(salario).value);
    y = parseFloat(document.getElementById(reajuste).value);

    reajusteCalculado = (y/100)*x;


    resultFinal = x + reajusteCalculado;

    document.getElementById(resultado).value=resultFinal;

}