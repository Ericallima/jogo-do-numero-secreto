let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial (){
exibirTextoNaTela ('h1', 'Jogo do Número Secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
    exibirTextoNaTela ('h1', 'Acertou!');
    let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
    let mensagemTenativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    exibirTextoNaTela('p', mensagemTenativas);
    document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto){
            exibirTextoNaTela ('p', 'O número secreto é menor!');
        } else{
            exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
    }
}

function numeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
   
   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumeroSorteado = [];
   }
    if (listaDeNumeroSorteado.includes(numeroEscolhido)){
    return numeroAleatorio();
   }else {
    listaDeNumeroSorteado.push(numeroEscolhido);
    console.log(listaDeNumeroSorteado);
    return numeroEscolhido;
   }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo (){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}