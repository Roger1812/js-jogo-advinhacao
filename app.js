// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

exibirMensagemInicial();

function verificarChute() {
  let chute= document.querySelector('input').value;
  console.log(numeroSecreto);
  console.log(chute == numeroSecreto);
  if (chute == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`
    exibirTextoNaTela('h1', 'Acertou!');
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor!');

      } else{
        exibirTextoNaTela('p', 'O número secreto é maior!');
      }
      tentativas++;
      limparChute();
    }
  }
  function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

  }
  function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparChute();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
  }


  function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
  }

function gerarNumeroAleatorio(){
  return parseInt(Math.random() * 10 + 1);
}