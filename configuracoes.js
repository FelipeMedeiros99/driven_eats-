let prato = null
let precoPrato = null
let bebida = null
let precoBebida = null
let sobremesa = null
let precoSobremesa = null
let itensSelecionados = 0


function converterEmDinheiro(valor){
    valor = parseFloat(valor.replace("$", "")).toFixed(2)
    return valor
}

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
        precoPrato = converterEmDinheiro(caixa.querySelector('span').innerHTML)

        itensSelecionados = itensSelecionados + 1
    } 

    else if(secao === "secao-bebidas"){
        bebida = caixa.querySelector("h2").innerHTML
        precoBebida = converterEmDinheiro(caixa.querySelector('span').innerHTML)
        itensSelecionados = itensSelecionados + 1
    }

    else if(secao === "secao-sobremesas"){
        sobremesa = caixa.querySelector("h2").innerHTML
        precoSobremesa = converterEmDinheiro(caixa.querySelector('span').innerHTML)
        console.log(precoSobremesa)
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
        console.log(janelaSecundaria.innerHTML)

        //tornando a janela principal opaca
        document.querySelector('.janela-principal').classList.add('janela-principal-desativada')

        janelaSecundaria.innerHTML = ` <div class="janela-secundaria janela-secundaria-ativada">
         <h2>Confirme seu pedido</h2>
                <div class="descricao-compras">
                    <div>
                        <p>${prato}</p>
                        <span>${precoPrato.replace(".", ",")}R$</span>
                    </div>
                    
                    <div>
                        <p>${bebida}</p>
                        <span>${precoBebida.replace(".", ",")}R$</span>
                    </div>

                    <div>
                        <p>${sobremesa}</p>
                        <span>${precoSobremesa.replace(".", ",")}R$</span>
                    </div>
                    
                    <div>
                        <p><strong>${(parseFloat(converterEmDinheiro(precoPrato)) + 
                parseFloat(converterEmDinheiro(precoBebida)) + 
                parseFloat(converterEmDinheiro(precoSobremesa))).toFixed(2).replace(".", ",")}</strong></p>
                        <span><strong>valor total</strong></span>
                    </div>
                </div>
                
                <button class="ok" onclick="finalizar()">Tudo certo, pode pedir!</button>
                <button class="cancelar" onclick="cancelar()">Cancelar</button>
        </div>`

    }

}

function finalizar(){
    let nome = prompt("insira seu nome:")
    let endereco = prompt("insira seu endereço")

    let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${(parseFloat(converterEmDinheiro(precoPrato)) + 
                parseFloat(converterEmDinheiro(precoBebida)) + 
                parseFloat(converterEmDinheiro(precoSobremesa))).toFixed(2).replace(".", ",")}
    
    Nome: ${nome}
    Endereço: ${endereco}`)

    window.open(`https://wa.me/5598987835523/?text=${mensagem}`)
}

function cancelar(){
    janelaSecundaria = document.querySelector('.janela-secundaria')
    janelaPrincipal = document.querySelector('.janela-principal')
    janelaSecundaria.classList.remove("janela-secundaria-ativada")
    janelaPrincipal.classList.remove('janela-principal-desativada')

}
