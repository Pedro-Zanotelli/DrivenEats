let selecionadoAnteriorPrato = null;
let selecionadoAnteriorBebida = null;
let selecionadoAnteriorSobremesa = null;

let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";

let preçoPrato = 0;
let preçoBebida = 0;
let preçoSobremesa = 0;
let valorTotal = 0;

function adicionarIcone1(selecionado){

    if(selecionadoAnteriorPrato !== null){

        const iconeAnterior = selecionadoAnteriorPrato.querySelector("ion-icon");
        if (iconeAnterior) { //* Verifica se a variável iconeAnterior existe e não é null ou undefined*//
            iconeAnterior.remove();
        }
    }
     // Cria um novo ícone de check
     const icone = document.createElement("ion-icon");
     icone.setAttribute("name", "checkmark-circle");
     console.log(icone)
 
     // Adiciona o ícone à div '.preço' do item selecionado
     selecionado.querySelector(".prato .preço").appendChild(icone);

     selecionadoAnteriorPrato = selecionado;
} 

function adicionarIcone2(selecionado){
    if(selecionadoAnteriorBebida !== null){

        const iconeAnterior = selecionadoAnteriorBebida.querySelector("ion-icon");
        if (iconeAnterior) { //* Verifica se a variável iconeAnterior existe e não é null ou undefined*//
            iconeAnterior.remove();
        }
    }
     // Cria um novo ícone de check
     const icone = document.createElement("ion-icon");
     icone.setAttribute("name", "checkmark-circle");
     console.log(icone)
 
     // Adiciona o ícone à div '.preço' do item selecionado
     selecionado.querySelector(".bebida .preço").appendChild(icone);

     selecionadoAnteriorBebida = selecionado;
} 

function adicionarIcone3(selecionado){
    if(selecionadoAnteriorSobremesa !== null){

        const iconeAnterior = selecionadoAnteriorSobremesa.querySelector("ion-icon");
        if (iconeAnterior) { //* Verifica se a variável iconeAnterior existe e não é null ou undefined*//
            iconeAnterior.remove();
        }
    }
     // Cria um novo ícone de check
     const icone = document.createElement("ion-icon");
     icone.setAttribute("name", "checkmark-circle");
     console.log(icone)
 
     // Adiciona o ícone à div '.preço' do item selecionado
     selecionado.querySelector(".sobremesa .preço").appendChild(icone);

     selecionadoAnteriorSobremesa = selecionado;
} 

function selecionarPrato(selecionado){
    const selecionadoAnterior = document.querySelector(".prato .pedido-selecionado")

    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove("pedido-selecionado");
    }
    selecionado.classList.add("pedido-selecionado");

    nomePrato = selecionado.querySelector(".titulo-prato").textContent;

    preçoPrato = Number(selecionado.querySelector(".preço").textContent.replace("R$ ", "").replace(",", "."));

    fecharPedido();
 
}

function selecionarBebida(selecionado){
    const selecionadoAnterior = document.querySelector(".bebida .pedido-selecionado")

    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove("pedido-selecionado");
    }
    selecionado.classList.add("pedido-selecionado");
    
    nomeBebida = selecionado.querySelector(".titulo-bebida").textContent;
    
    preçoBebida = Number(selecionado.querySelector(".preço").textContent.replace("R$ ", "").replace(",", "."));;

    fecharPedido();
 
}

function selecionarSobremesa(selecionado){
    const selecionadoAnterior = document.querySelector(".sobremesa .pedido-selecionado")

    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove("pedido-selecionado");
    }
    selecionado.classList.add("pedido-selecionado");

    nomeSobremesa = selecionado.querySelector(".titulo-sobremesa").textContent;
    
    preçoSobremesa = Number(selecionado.querySelector(".preço").textContent.replace("R$ ", "").replace(",", "."));


    fecharPedido();

}

function fecharPedido() {
    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".botao-final").classList.add("fechar-pedido");
        document.querySelector(".botao1").textContent = "Fechar pedido";
    }
}

function confirmarPedido(){
    if (nomePrato && nomeBebida && nomeSobremesa) {
        document.querySelector(".fundo-branco").classList.remove("invisivel")

        document.querySelector(".nome-prato-confirmado").textContent = nomePrato;
        document.querySelector(".preço-prato-confirmado").textContent = `R$ ${preçoPrato.toFixed(2).replace(".", ",")}`; //Se você tentar usar .replace() diretamente em um número, obterá um erro, porque .replace() é um método de strings, e não de números. O método .toFixed(2) converte o número para uma string com exatamente duas casas decimais, o que permite o uso de .replace() para trocar o ponto por uma vírgula.

        document.querySelector(".nome-bebida-confirmada").textContent = nomeBebida;
        document.querySelector(".preço-bebida-confirmada").textContent = `R$ ${preçoBebida.toFixed(2).replace(".", ",")}`;

        document.querySelector(".nome-sobremesa-confirmada").textContent = nomeSobremesa;
        document.querySelector(".preço-sobremesa-confirmada").textContent = `R$ ${preçoSobremesa.toFixed(2).replace(".", ",")}`;

        valorTotal = preçoPrato + preçoBebida + preçoSobremesa;
        document.querySelector(".valor-total").textContent = `TOTAL: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;
    }
}
function ok() {

    const mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${valorTotal.toFixed(2).replace(".", ",")}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

function cancelarPedido() {
    document.querySelector(".fundo-branco").classList.add("invisivel");
}

