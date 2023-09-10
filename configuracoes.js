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
        botao.classList.add("ativado")
        botao.innerHTML = "fechar pedido"
    }

}

function fecharPedido(){
    const botao = document.querySelector("button")
    x = botao.classList.contains("ativado")
    if (document.querySelector("button").classList.contains("ativado")){
        document.querySelector("a").innerHTML = href="https://wa.me/5598987835523"
    }
}

