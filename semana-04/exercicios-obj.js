// 1) Crie uma função que receba 3 parâmetros: o nome de um livro, a quantidade de páginas e a autoria. 
// Retorne um objeto no formato: {titulo: "nome do livro", paginas: "número de páginas", autoria: "nome da pessoa"}

// Exemplo: 
// objLivro('Antes do Baile Verde', 234, 'Lygia Fagundes Telles') 

// retorna o objeto:
// {
//   titulo: 'Antes do Baile Verde', 
//   paginas: 234,
//   autoria: 'Lygia Fagundes Telles'
// }

function objLivro(titulo, paginas, autor) {
    const livro = {
        titulo,
        paginas,
        autor,
    }
    return livro
}

console.log(objLivro('Jogos Vorazes', 374, 'Suzanne Collins'))

// 2) Aproveite a função acima em outra função, que deve retornar a seguinte frase: "O livro 
// XXXX foi escrito por XXX e tem XXX páginas". Você deve utilizar a função que já está pronta, e não reescrever 
// a lógica dela dentro dessa nova função.

const jogosVorazes = objLivro('Jogos Vorazes', 374, 'Suzanne Collins')

function infoLivro(obj) {
    
    return `O livro ${obj.titulo} foi escrito por ${obj.autor} e tem ${obj.paginas} páginas.`
}

console.log(infoLivro(jogosVorazes))

// 3) Crie uma função que receba um objeto como o abaixo:

// const pessoa = {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
// }

// Dado um objeto que tem uma propriedade 'nome' e uma propriedade 'sobrenome', a função deve
// retornar um novo objeto com as mesmas propriedades que o objeto recebido e mais uma propriedade, 
// chamada 'nomeCompleto', cujo valor é uma string com o nome e sobrenome separados por um espaço.

// Exemplo de retorno:
// {
//   nome: 'Nazaré',
//   sobrenome: 'Tedesco',
//   nomeCompleto: 'Nazaré Tedesco'
// }

const pessoa = {
    nome: 'Nazaré',
    sobrenome: 'Tedesco',
}

function nomeCompleto(obj) {
    dadosPessoais = {
        nome: obj.nome,
        sobrenome: obj.sobrenome,
        nomeCompleto: obj.nome + ' ' + obj.sobrenome,
    }
    return dadosPessoais
}

console.log(nomeCompleto(pessoa))

// 4) Crie uma função que receba o objeto abaixo e o nome de uma das chaves, e retorne a soma de todos 
// os elementos do array que for selecionado através da chave.
// Exemplo:
// somaArray(objetoArrays, 'array2') // 21

const arrays = {
    array1: [1, 2, 3],
    array2: [5, 6, 7, 8],
    array3: [9, 9, 9]
}

// resolução com for

function somaArray(obj, chave) {
    let soma = 0
    for (let i = 0; i < obj[chave].length; i++) {
        soma += obj[chave][i]
    }
    return soma
}

console.log(somaArray(arrays, 'array3'))

// resolução com reduce()

function somaReduce(obj, chave) {
    const soma = obj[chave].reduce((soma, numero) => soma + numero, 0)
    return soma
}

console.log(somaReduce(arrays, 'array2'))
