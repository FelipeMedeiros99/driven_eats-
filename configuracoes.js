let nome = null

function selecionado(item, secao){
    /*
    adiciona a classe "selecionado" a um ítem de determinada 
    seção, removendo outro qualquer que esteja selecionado na mesma secao.
    */


    //1 - removendo pratos selecionados na seção, caso existam
    const caixa = document.querySelector(secao) //selecionando a seção (bebidas, sobremesas ou comidas)
    const itemJaSelecionados =  caixa.querySelector(".selecionados") //localizando item selecionado na seção
    
    // se existir um ítem selecionado, ele é removido
    if (itemJaSelecionados !== null){
        itemJaSelecionados.classList.remove("selecionados")
    }

    // selecionando o novo item
    const novoSelecionado = caixa.querySelector(item) 
    novoSelecionado.classList.add("selecionados") //adicionando a classe selecionados 
    caixa.classList.add("ok") //adiciona o "ok" na seção principal
    
    // testando se todas as seções já foram selecionadas
    ativaBotao()

}

function ativaBotao(){
    //funcao verifica se todos as seçoes estão selecionadas. Caso estejam
    //muda o botão para fechar o pedido 


    const setorPratos = document.querySelector(".secao-pratos")
    const setorBebidas = document.querySelector(".secao-bebidas")
    const setorSobremesa = document.querySelector(".secao-sobremesas")
    
    const pratoEstaSelecionado = setorPratos.classList.contains('ok')
    const bebidaEstaSelecionada = setorBebidas.classList.contains('ok')
    const sobremesaEstaSelecionada = setorSobremesa.classList.contains('ok')

    // verificando se todos estão selecionados pela classe ".ok"
    if (pratoEstaSelecionado && bebidaEstaSelecionada && sobremesaEstaSelecionada){
        const botao = document.querySelector("button")
        document.querySelector("a").classList.add("link-on")
        botao.classList.add("ativado")
        botao.innerHTML = "fechar pedido"

        
        botao2 = document.querySelector(".botaoSecundario");
        if (botao2 !== null){
            botao2.classList.add('desativar');
        }

        const prato = gerenciaPedidos(".secao-pratos")
        const precoPrato = parseFloat(precoFinal(".secao-pratos").replace(",", ".").replace("$", ""))
        const bebida = gerenciaPedidos(".secao-bebidas")
        const precoBebida = parseFloat(precoFinal(".secao-bebidas").replace(",", ".").replace("$", ""))
        const sobremesa = gerenciaPedidos(".secao-sobremesas")
        const precoSobremesa = parseFloat(precoFinal(".secao-sobremesas").replace(",", ".").replace("$", ""))        
        

        if(nome === null){
            nome = prompt("insira seu nome")
            endereco = prompt("insira seu endereço")
        }


        let mensagem = `Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${((precoBebida+precoPrato+precoSobremesa).toFixed(2)+"").replace(".", ",")}
        
        nome: ${nome}
        endereço: ${endereco}`
        

        

        mensagem = encodeURIComponent(mensagem)
        //alert(mensagem)
        const ancoragem = `<a href="https://api.whatsapp.com/send?phone=5598987835523&text=${mensagem}" target="_blank" class="link-on"><button class="ativado">fechar pedido</button></a>`
        document.querySelector("footer").innerHTML = ancoragem   
    }

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

function precoFinal(secao){

    const secaoItem = document.querySelector(secao)
    const caixaItemSelecionado = secaoItem.querySelector(".selecionados")
    if (caixaItemSelecionado !== null){
        const nomeItem = caixaItemSelecionado.querySelector('span')
        return(nomeItem.innerHTML)                   
    }
    
}

