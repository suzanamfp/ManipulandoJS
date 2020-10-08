function calcular() {

    var valorA = document.calculo.valorA.value;
    var valorB = document.calculo.valorB.value;

    if(valorA == valorB) {
        var valorC = parseFloat(valorA) + parseFloat(valorB);
    } else {
        var valorC = parseFloat(valorA) * parseFloat(valorB);
    }

    document.calculo.valorC.value = valorC;
} 