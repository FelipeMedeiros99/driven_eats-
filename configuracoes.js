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
    ativaBotao()
}

function gerenciaPedidos(secao){
    
    /*essa função localiza o nome do ítem pedido por seção e 
    retorna o nome do prato*/

    const secaoItem = document.querySelector(secao)
    const caixaItemSelecionado = secaoItem.querySelector(".selecionados")
    if (caixaItemSelecionado !== null){
        const nomeItem = caixaItemSelecionado.querySelector('h2')
        return nomeItem.innerHTML                   
    }
    
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

        botao2 = document.querySelector(".botaoSecundario");
        botao2.classList.add('desativar');

        const prato = gerenciaPedidos(".secao-pratos")
        const precoPrato = parseFloat(preçoFinal(".secao-pratos").replace(",", ".").replace("$", ""))
        const bebida = gerenciaPedidos(".secao-bebidas")
        const precoBebida = parseFloat(preçoFinal(".secao-bebidas").replace(",", ".").replace("$", ""))
        const sobremesa = gerenciaPedidos(".secao-sobremesas")
        const precoSobremesa = parseFloat(preçoFinal(".secao-sobremesas").replace(",", ".").replace("$", ""))
        const mensagem = `Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${precoBebida+precoPrato+precoSobremesa}`

        alert(mensagem)

   
    }


}


function preçoFinal(secao){

    const secaoItem = document.querySelector(secao)
    const caixaItemSelecionado = secaoItem.querySelector(".selecionados")
    if (caixaItemSelecionado !== null){
        const nomeItem = caixaItemSelecionado.querySelector('span')
        return(nomeItem.innerHTML)                   
    }
    
}