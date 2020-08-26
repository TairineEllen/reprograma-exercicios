// **Você pode dar os nomes que quiser para as funções e variáveis, apenas lembre que eles devem ser semânticos :)

// 1) crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), 
// cada uma delas recebendo 2 números como parâmetros e retornando o resultado

function soma(a, b) {
    sum = a + b;
    return sum
}

function subtracao(a, b) {
    sub = a - b;
    return sub
}

function multiplicacao(a,b) {
    if (a === 0 || b === 0) {
        return "Valor não pode ser zero"
    }
    mul = a * b
    return mul 
}

function divisao(a, b) {
    if (a == 0 || b == 0) {
        return 'Valor não pode ser zero'
    } else {
        div = a / b
        return div
    }
}

/*
console.log(soma(2,0))
console.log(subtracao(2,0))
console.log(multiplicacao(2,0))
console.log(multiplicacao(3,2))
console.log(divisao(9,0))
console.log(divisao(9,3))
*/



// 2) para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero).
// Adicione esta lógica nas funções.

// 3) crie uma função que chame qualquer uma das funções acima e imprima o resultado no formato de String.
// Exemplo: "O resultado da operação é X" (sendo X o valor do resultado).

function retornaString(a, b, op) {
    switch (op) {
        case 'soma':
            res = soma(a, b)
            break;
        case 'subtração':
            res = subtracao(a, b)
            break;
        case 'multiplicação':
            res = multiplicacao(a, b)
            break;
        case 'divisão':
            res = divisao(a, b)
            break;        
    }
    return `O resultado da operação é ${res}`

}

console.log(retornaString(2, 8, 'multiplicação'))



// 4) utilizando as funções de soma e multiplicação dos exercícios anteriores, crie uma função que resolva 
// a conta 36325 * (9824 + 777).

function somaMultiplicacao(a, b, c){
    m = soma(b,c)
    return multiplicacao(a, m)
}

console.log(somaMultiplicacao(36325, 9824, 777))

// 5) crie uma função que receba dois números e gere outros dois números aleatórios com valores entre eles. 
// Exemplo: uma função que receba (1, 100) deve gerar dois números aleatórios entre 1 e 100. 
// Em seguida, some estes números e devolva uma string com o resultado no formato: "a soma de [número aleatório] e 
// [número aleatório] é XXX". Você vai ter que pesquisar o método do JS para gerar números aleatórios, `Math.random()` 
// e como utilizá-lo.

function somaAleatorio(a, b) {
    num1 = Math.random() * (b - a) + a
    num2 = Math.random() * (b - a) + a 
    total = num1 + num2
    return `A soma de ${num1.toFixed(2)} e ${num2.toFixed(2)} é ${total.toFixed(2)}`
}

console.log(somaAleatorio(3,9))

// 6) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros
// 2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: 
// "Preencha todos os valores corretamente!"
// 3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.

function multiplicacaoSomaDois(a, b, c) {
    if (!a || !b || !c) {
        return 'Prencha todos os valores corretamente!'
    } else {
        return (a * b * c) + 2
    }
}

console.log(multiplicacaoSomaDois(1,2,2))

// 7) Crie uma função com as seguintes características:
// 1. A função deve receber 3 parâmetros.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// 4. Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne "não recebeu parâmetro"

function parametros(a, b, c) {
    if (!b && !c) {
        return a
    } else if (!a || !b || !c) {
        return a + b || b + c || a + c
    } else if (!a && !b && !c) {
        return 'Não recebeu parâmetros'
    } else{
        return (a + b) / c
    }
}

console.log(parametros(4,2,3))

// 8) crie uma função que receba uma string como parâmetro, e retorne essa mesma string invertida. 
// Por exemplo, recebendo "reprograma", vai retornar "amargorper". 
// Para isso, você vai ter que pesquisar como usar JavaScript para inverter uma string.

function inverter(palavra) {
    return palavra.split('').reverse().join('')
}

console.log(inverter('Bruce'))

// 9) agora que você já sabe reverter strings, crie uma função que receba uma string, 
// verifique se é um palíndromo e retorne true ou false. Exemplo de palíndromo: "arara".

function palindromo(palavra){
    if (inverter(palavra) == palavra) {
        return true
    } else{
        return false
    }
}

console.log(palindromo('tairine'))

// 10) crie uma função que receba duas strings como parâmetros e retorne a string com a maior quantidade de caracteres. 
// Por exemplo, se passarmos como parâmetro "banana" e "chocolate" a função deve retornar "chocolate"

function compararCaracteres(texto1, texto2) {
    if (texto1.length > texto2.length) {
        return texto1
    } else {
        return texto2
    }
}

console.log(compararCaracteres('oi', 'gato'))
