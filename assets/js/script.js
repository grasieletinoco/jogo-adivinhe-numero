let jogoNumeroSecreto = document.getElementById('numero__secreto');
let jogarNovamente = document.getElementById('novo__jogo');

let numeroInput = document.getElementById('campo__escolha');
let mensagemResultado = document.getElementById('texto1');
let mensagemTentativas = document.getElementById('texto2');
let quantidadeChutes = document.getElementById('quantidade__tentativas');
let chutesEscolhidos = document.getElementById('numeros__escolhidos');

let numeroSecreto;
let tentativas;


function novoJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;

    mensagemResultado.innerHTML = 'Adivinhe o Número!';
    mensagemTentativas.innerHTML = 'Estou pensando em um Número de 1 a 100. Você só tem 10 Tentativas';
    mensagemTentativas.style.color = "";
    quantidadeChutes.innerHTML = '';
    chutesEscolhidos.innerHTML = '';
    jogoNumeroSecreto.disabled = false;
    jogarNovamente.disabled = true;
    numeroInput.value = '';
}


function processarChute() {

    let chuteNumero = parseInt(numeroInput.value);

    if (isNaN(chuteNumero) || chuteNumero < 1 || chuteNumero > 100) {
        alert('Por favor, insira um Número Válido entre 1 e 100.');
        return;
    }

    tentativas++;

    if (chuteNumero > numeroSecreto) {
        mensagemTentativas.innerHTML = 'O Número Secreto é Menor';

    } else if (chuteNumero === numeroSecreto) {
        mensagemResultado.innerHTML = 'Acertou!';
        mensagemTentativas.innerHTML = `Você Descobriu o Número Secreto com ${tentativas} Tentativas!`;
        mensagemTentativas.style.color = "limegreen";
        jogoNumeroSecreto.disabled = true;
        jogarNovamente.disabled = false;

    } else if (tentativas >= 10) { 
        mensagemResultado.innerHTML = 'Game Over!';
        mensagemTentativas.innerHTML = 'Fim de Jogo! Você já fez 10 Tentativas';
        mensagemTentativas.style.color = "red";
        jogoNumeroSecreto.disabled = true;
        jogarNovamente.disabled = false;

    } else {
        mensagemTentativas.innerHTML = 'O Número Secreto é Maior';
    }

    quantidadeChutes.innerHTML = tentativas;
    chutesEscolhidos.innerHTML += chuteNumero + ' ';
}

jogoNumeroSecreto.addEventListener('click', processarChute);

jogarNovamente.addEventListener('click', novoJogo);

novoJogo();
