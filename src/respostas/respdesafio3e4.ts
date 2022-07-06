//console.log('Arquivo de testes. Pode mexer nele como quiser.')
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
let button2 = document.getElementById('button2')! as HTMLButtonElement;

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
 
function somaValidaComPrint(numero1: number, numero2: number, printarResultado: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (printarResultado) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
};

let printarResultado = true;
let frase: string;
frase = "O número é ";

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaValidaComPrint(Number(input1.value), Number(input2.value), printarResultado, frase));
        }
    })
};
  
button2.addEventListener('click', () => {  
  input1.value = '', input2.value = '';
  console.log("Faça novo cálculo."); 
})

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) { //no input
    if (campoSaldo) {                  // span do h1
        saldoTotal += soma              //saldo inicial de 0 + novo valor
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";              //deixa o input vazio
}

function limparSaldo() {        //retorna o resultado para o valor inicial 0
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {                   //somar com o valor atual
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));       //pega o valor antigo em texto e soma como número
        console.log("Valor somado até então: " + saldoTotal);
    });
}

botaoLimpar.addEventListener('click', () => {
    limparSaldo();
    console.log("Valor zerado.")
});