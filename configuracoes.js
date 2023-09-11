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

    caixa.classList.add("ok")

    ativaBotao()


}

function ativaBotao(){
    const setorPratos = document.querySelector(".secao-pratos")
    const setorBebidas = document.querySelector(".secao-bebidas")
    const setorSobremesa = document.querySelector(".secao-sobremesas")
    
    const pratoSelecionado = setorPratos.classList.contains('ok')
    const bebidaSelecionada = setorBebidas.classList.contains('ok')
    const sobremesaSelecionada = setorSobremesa.classList.contains('ok')

    if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada){
        const botao = document.querySelector("button")
        document.querySelector("a").classList.add("link-on")
        botao.classList.add("ativado")
        botao.innerHTML = "fechar pedido"
        
        botao2 = document.querySelector(".botaoSecundario")
        botao2.classList.add('desativar')
    }

}



