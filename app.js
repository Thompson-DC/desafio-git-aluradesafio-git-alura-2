let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio' ;

function checarBotaoConsole() {
    console.log ('O botão CONSOLE foi clicado')
}

function checarBotaoAlerta() {
    alert ('Eu amo JS')
}

function checarBotaoPrompt() {
    let cidade = prompt ('Digite o nome de uma cidade do Brasil');
    alert (`Estive em ${cidade} e lembrei de você.`);
}

function checarBotaoSoma() {
    let numero1 = prompt ('Digite o primeiro número:');
    let numero2 = prompt ('Digite o segundo número:');
    let soma = parseInt (numero1) + parseInt (numero2);
    alert (`A soma de ${numero1} + ${numero2} é ${soma}`);
}