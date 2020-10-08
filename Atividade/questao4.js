function calcular(parcelas) {

    var valor = document.preco.valor.value;

    if(parcelas == "3") {
        var valortotal = parseFloat(valor) + parseFloat(valor*0.1);
        var prestacao = parseFloat(valortotal)/3;
    } else {
        if(parcelas == "5") {
            var valortotal = parseFloat(valor) + parseFloat(valor)*0.2;
            var prestacao = parseFloat(valortotal)/5;
        }
    }

    document.preco.valortotal.value = valortotal;
    document.preco.prestacao.value = prestacao;
}