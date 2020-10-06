// 1) Calcule a potência de 2 elevado a um número específico. Deve usar um loop (não usar `Math.pow()`).
// Exemplo:
// potenciaDeDois(10) // 1024

function potenciaDeDois(x) {
    let pot = 1
    for (let i = 0; i < x; i++) {
        pot = pot*2
    }
    return pot
    
}

console.log(potenciaDeDois(10))

// 2) Crie uma função que receba três números e determine se um número é maior que outro.
// Exemplo:
// retornaNumMaior(10, 20, 30) // 30

function maiorNumero(a, b, c){
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b 
    } else {
        return c
    }
}

console.log(maiorNumero(90, 60, 30))



// ***************

// DESAFIOS!

// Crie uma função que determina se um número é primo e retorne true ou false conforme o caso. 
// Em matemática, um número primo é um número natural maior que 1 que é divisível somente por ele mesmo e 1. 
// Utilize o operador módulo (`%`) para determinar se um número é divisível por outro.

function primo(x){
    for (let i = 2; i < x; i++){
        if (x % i === 0) {
            return false
        } else{
            return true
        }
    }
}

console.log(primo(7))

// Crie uma função que conte o número de vogais em uma `string` e retorne o número de vogais. 
// Exemplo:
// function contaVogais("carro") // 2 

function contarVogal(str) {
    let cont = 0
    let texto = str.split('')
    for (let i = 0; i < texto.length; i++){
        if (texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u') {
            cont++
        }
    }
    return cont
}

console.log(contarVogal('tairine ellen'))


// Use estruturas de controle para inverter uma array de inteiros. A função deverá receber uma array de números e 
// retornar uma array com a ordem dos elementos invertida. Não é válido utilizar `arr.reverse()`.
// Exemplo:
// function inverteArray([1, 2, 3, 4]) // [4, 3, 2, 1]

