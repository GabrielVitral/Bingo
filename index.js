var cartelasContainer = document.getElementById('cartelas');
var nomeJogadorInput = document.getElementById('nome-jogador');
var gerarCartelaButton = document.getElementById('gerar-cartela');
var iniciarJogoButton = document.getElementById('iniciar-jogo');
var numeroSorteadoDisplay = document.getElementById('numero-sorteado');
var numerosSorteadosContainer = document.getElementById('numeros-sorteados');
var vencedoresContainer = document.getElementById('vencedores');
var cartelas = [];
var numerosSorteados = [];

gerarCartelaButton.addEventListener('click', gerarCartela);
iniciarJogoButton.addEventListener('click', iniciarJogo);

function gerarCartela() {
    var nomeJogador = nomeJogadorInput.value.trim();
    if (nomeJogador === '') {
        alert('Por favor, insira um nome para o jogador.');
        return;
    }



    var cartela = criarCartela();
    cartelas.push({ jogador: nomeJogador, numeros: cartela, venceu: false });
    exibirCartelas();
    nomeJogadorInput.value = '';
}

function exibirCartelas() {
    cartelasContainer.innerHTML = '';

    for (var i = 0; i < cartelas.length; i++) {
        var cartela = cartelas[i];
        var cartelaContainer = document.createElement('div');
        cartelaContainer.classList.add('cartela');

        var nomeJogador = document.createElement('span');
        nomeJogador.textContent = cartela.jogador;
        cartelaContainer.appendChild(nomeJogador);

        var numerosTable = document.createElement('table');
        for (var k = 0; k < 5; k++) { // Inverter o loop das colunas
            var row = document.createElement('tr');
            for (var j = 0; j < 5; j++) { // Inverter o loop das linhas
                var cell = document.createElement('td');
                var numero = document.createElement('div');
                numero.classList.add('numero');
                numero.textContent = cartela.numeros[j * 5 + k]; // Inverter o cálculo do índice
                cell.appendChild(numero);
                row.appendChild(cell);
            }
            numerosTable.appendChild(row);
        }
        cartelaContainer.appendChild(numerosTable);

        cartelasContainer.appendChild(cartelaContainer);
    }
}

function iniciarJogo() {
    if (cartelas.length === 0) {
        alert('Por favor, gere pelo menos uma cartela para iniciar o jogo.');
        return;
    }

    gerarCartelaButton.disabled = true;
    iniciarJogoButton.disabled = true;

    var intervalId = setInterval(() => {
        if (cartelas.length === 0) {
            clearInterval(intervalId);
            return;
        }

        var numeroSorteado = sortearNumero();
        numerosSorteados.push(numeroSorteado);
        numeroSorteadoDisplay.textContent = numeroSorteado;
        numerosSorteadosContainer.textContent = numerosSorteados.join(', ');
        marcarNumeroNasCartelas(numeroSorteado);
        verificarVencedores();

        if (cartelas.some(cartela => cartela.venceu)) {
            clearInterval(intervalId);
            gerarCartelaButton.disabled = false;
            iniciarJogoButton.disabled = false;
        }
    }, 1000);
}

function criarCartela() {
    var cartela = [];
    var colunaB = obterNumerosAleatorios(1, 15, 5);
    var colunaI = obterNumerosAleatorios(16, 30, 5);
    var colunaN = obterNumerosAleatorios(31, 45, 5);
    var colunaG = obterNumerosAleatorios(46, 60, 5);
    var colunaO = obterNumerosAleatorios(61, 75, 5);

    cartela = cartela.concat(colunaB, colunaI, colunaN, colunaG, colunaO);
    return cartela;
}

function obterNumerosAleatorios(min, max, quantidade) {
    var numeros = new Set();
    while (numeros.size < quantidade) {
        var numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.add(numero);
    }
    return Array.from(numeros);
}

function sortearNumero() {
    var numerosRestantes = obterNumerosRestantes();
    var indiceAleatorio = Math.floor(Math.random() * numerosRestantes.length);
    var numeroSorteado = numerosRestantes[indiceAleatorio];
    return numeroSorteado;
}

function obterNumerosRestantes() {
    var todosNumeros = [];
    for (var i = 1; i <= 75; i++) {
        todosNumeros.push(i);
    }
    return todosNumeros.filter(numero => !numerosSorteados.includes(numero));
}

function marcarNumeroNasCartelas(numero) {
    for (var i = 0; i < cartelas.length; i++) {
        var cartela = cartelas[i];
        var numeros = cartela.numeros;
        var index = numeros.indexOf(numero);
        if (index !== -1) {
            var cartelaContainer = cartelasContainer.children[i];
            var numeroElement = cartelaContainer.querySelectorAll('.numero')[index];
            numeroElement.classList.add('marcado');
        }
    }
}

function verificarVencedores() {
    var vencedores = cartelas.filter(cartela => cartela.numeros.every(numero => numerosSorteados.includes(numero)));
    vencedoresContainer.innerHTML = '';

    if (vencedores.length > 0) {
        var vencedoresList = document.createElement('ul');
        for (var vencedor of vencedores) {
            var vencedorItem = document.createElement('li');
            vencedorItem.textContent = vencedor.jogador;
            vencedoresList.appendChild(vencedorItem);
            vencedor.venceu = true;
        }
        vencedoresContainer.appendChild(vencedoresList);
    }
}
