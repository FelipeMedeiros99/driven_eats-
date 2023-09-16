let prato = null
let precoPrato = null
let bebida = null
let precoBebida = null
let sobremesa = null
let precoSoboremesa = null
let itensSelecionados = 0

function selecionaCaixa(secao, caixa){
    // essa função ativa o botão após um ítem de cada seção ser escolhido


    //desmarcando ítem da secao que foi selecionado anteriormente
    let caixaMarcada = document.querySelector(`.${secao} .caixa-selecionada`)
    //se houver caixa marcada, desmarcar
    if (caixaMarcada !== null){
         caixaMarcada.classList.remove("caixa-selecionada")

         let icon = caixaMarcada.querySelector('.icon-ativado')
         icon.classList.remove('icon-ativado')
         itensSelecionados = itensSelecionados - 1

    }


    //adicionando a classe no item selecionado
    caixa.classList.add('caixa-selecionada')
    let marcarIcon = caixa.querySelector('ion-icon')
    marcarIcon.classList.add('icon-ativado')


    //substituindo o nome do elemento e o preco
    if (secao === "secao-pratos"){
        prato = caixa.querySelector("h2").innerHTML
        precoPrato = parseFloat(caixa.querySelector('span').innerHTML).toFixed(2)
        itensSelecionados = itensSelecionados + 1
    } 

    else if(secao === "secao-bebidas"){
        bebida = caixa.querySelector("h2").innerHTML
        precoBebida = parseFloat(caixa.querySelector('span').innerHTML).toFixed(2)
        itensSelecionados = itensSelecionados + 1
    }

    else if(secao === "secao-sobremesas"){
        sobremesa = caixa.querySelector("h2").innerHTML
        precosobremesa = parseFloat(caixa.querySelector('span').innerHTML).toFixed(2)
        itensSelecionados = itensSelecionados + 1    
    }


    // ativando o botão
    if (itensSelecionados == 3){
        let botao = document.querySelector('button')
        botao.classList.add("botao-ativado")
        botao.innerHTML = 'fechar pedido'
    }

}


function fecharPedido(botao){
    // essa funcao verifica se o botao está ativo e abre a nova janela
    // caso o botao esteja
    if(botao.classList.contains("botao-ativado")){
        //ativando janela de revisão
        let janelaSecundaria = document.querySelector('.janela-secundaria')
        janelaSecundaria.classList.add('janela-secundaria-ativada')

        //tornando a janela principal opaca
        document.querySelector('.janela-principal').classList.add('janela-principal-desativada')
    }

}


/*
let nome = null

function selecionado(item, secao){
    /*
    adiciona a classe "selecionado" a um ítem de determinada 
    seção, removendo outro qualquer que esteja selecionado na mesma secao.
    


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
    
    //essa função localiza o nome do ítem pedido por seção e 
    //retorna o nome do prato

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

*/