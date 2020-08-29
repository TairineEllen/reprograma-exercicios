
// 1) crie uma função que receba uma string e devolva seu valor em letras maiúsculas, separadas por um espaço. 
// Exemplo: 'banana' -> 'B A N A N A'

function textoMaiusculo(str) {
    let maiusculo = ''
    for (let i = 0; i < str.length; i++){
        maiusculo += str[i].toUpperCase() + ' '
    }
    return maiusculo   
}

console.log(textoMaiusculo('tairine ellen'))

// 2) crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a 
// função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 

function somaProg(num) {
    let soma = 0
    for (let i = 0; i <= num; i++) {
        soma += i
    }
    return soma
}

console.log(somaProg(12))

// 3) crie um programa que pergunta seu nome. Depois que digitar o nome, o programa deverá responder 'Olá [nome]'.
// Enquanto digitar qualquer palavra, print o que foi digitado mas avise que, para sair, é só dizer 'Tchau'.
// O programa vai dizer 'Tchau [nome]' e finalizar.

const input = require('readline-sync')

function imprimeComandos() {

    const nome = input.question('Qual seu nome? ')
    console.log(`Olá ${nome}`)
    let palavra = ''

    do {
        palavra = input.question('Digite algo. Para sair digite tchau. ')
        console.log(palavra)
    } while (palavra != "Tchau") {
        console.log(palavra)
        palavra = input.question('Digite algo. Para sair digite tchau. ')
    }
    console.log(`Tchau ${nome}`)
}

imprimeComandos()

// 4) crie uma função que receba dois números e exiba no console uma contagem regressiva entre else, 
// contando de dois em dois números. Por exemplo: recebendo o número inicial 20 e o final 0, a 
// função deverá imprimir em sequência 20 18 16 14 12 10 8 6 4 2 0.

function contagemRegressiva(ini, fim) {
    for (let x = ini; x >= fim; x -= 2) {
        console.log(x)
    }
}

contagemRegressiva(10,0)

// 5) crie uma função que receba um número e imprima no console de 0 até o número informado. 
// Além disso, cada vez que imprimir o número, informe se é par ou ímpar. Exemplo: recebendo 5, 
// deve imprimir: "0 é par", "1 é ímpar", "2 é par", "3 é ímpar", "4 'par", "5 é ímpar". 

function parImpar(num) {
    let i = 0
    while (i <= num) {
        if (i % 2 == 0){
           console.log(`${i} é par`)
        } else {
           console.log(`${i} é ímpar`)
        }
    i++
   }
}

parImpar(18)

// 6) crie uma função que receba um número inteiro e imprima os números no console de 1 ao número. 
// Porém, para todos os números que forem múltiplos de 3, imprima na tela "banana" ao invés do número; 
// para os números múltiplos de 5, imprima "biscoito". Para números múltiplos de 3 e 5, imprima "biscoito de banana". 
// Exemplo, recebendo 15 o resultado será 1 2 banana 4 biscoito banana 7 8 banana biscoito 11 banana 13 14 biscoito 
// de banana

function biscoitoDeBanana(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log('biscoito de banana')
        } else if (i % 5 == 0) {
            console.log('biscoito')
        } else if (i % 3 == 0) {
            console.log('banana')
        } else {
            console.log(i)
        }
    }
}

biscoitoDeBanana(30)

// 7) crie uma função que receba um número positivo inteiro, itere de 1 ao número e some todos os números 
// múltiplos de 3 OU 5.

function tresOuCinco(num) {
   
    let soma = 0
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 || i % 5 == 0){
            soma += i
        }
    }
    console.log(soma)
    return soma 
}

tresOuCinco(10)

// 8) altere a função acima para, ao invés de somar múltiplos de 5 ou 3, fazer isso com qualquer número de 1 a 9. 
// Os números serão recebidos via parâmetro de função, por exemplo: `function somaMultiplos(num, multiplo1, multiplo2)` 
// pode ser chamada com os valores `somaMultiplos(100, 2, 4) e verificar os números múltiplos de 2 e 4. 
// Extra: antes de seguir com o cálculo, verificar se os números recebidos estão mesmo entre 1 e 9; caso não estejam, 
// imprimir o aviso "informe múltiplos de 1 a 9" e encerrar o programa.

function somaMultiplo(num, mult1, mult2) {
    if (mult1 < 1 || mult2 > 9) {
        return 'Digite um número de 1 a 9'
    }
    
    let soma = 0
    for (let i = 0; i <= num; i++) {
        if (i % mult1 == 0 || i % mult2 == 0){
            soma += i
        }
    }
    return soma
}

console.log(somaMultiplo(40,2,4))

// 9) crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). 
// Por exemplo, caso receba o número 5 como parâmetro:
// *
// **
// ***
// ****
// *****

function imprimirAsteriscos(num) {
    
    let res = ''
    for (let i = 0; i < num; i++){
        res += '*'       
        console.log(res)    
    }   
}

imprimirAsteriscos(10)

// DESAFIO EXTRA: refaça o exercício acima, porém agora com o seguinte padrão:
//     *
//    **
//   ***
//  ****
// *****

function imprimirAsteriscosInverso(num) {
    
    let esp = ''
    let res = ''
    for (let i = 0; i < num; i++){
        for (let j = num - i; j > 1; j--) {
            esp += ' ' 
        }
        res += '*'  
        console.log(esp + res)            
        esp = ''            
    }     
}

imprimirAsteriscosInverso(10)

function descrescente(num) {
    let esp = ''
    let ast = ''
    for (let i = 0; i < num; i++) {
        for (let j = num - i; j > i; j--) {
            esp += ' '
        }
        ast += '*'
        console.log(esp + ast)
        esp = ''
    }
} 

descrescente(5)