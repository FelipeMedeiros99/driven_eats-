function selecionado(item, secao){


    // removendo pratos caso já possua um selecionado
    const caixa = document.querySelector(secao)
    const itemJaSelecionados =  caixa.querySelector(".selecionados")
    if (itemJaSelecionados !== null){
        itemJaSelecionados.classList.remove("selecionados")
    }

    // selecionando o novo item
    const pratoSelecionado = document.querySelector(item)
    pratoSelecionado.classList.add("selecionados")

    return pratoSelecionado
}

function ativaBotao(){
    
}