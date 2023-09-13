function selecionado(item, secao){
    /*
    adiciona a classe "selecionado" a um ítem de determinada 
    seção, removendo outro qualquer que esteja selecionado na mesma secao.
    */


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

    p = caixa.querySelector("p")
    h2 = caixa.querySelector("h2")
    imagem = caixa.querySelector("img")
    span = caixa.querySelector("sapan")

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





