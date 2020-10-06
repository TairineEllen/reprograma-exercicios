const input = require("readline-sync");

const n1 = input.question('Digite a nota 1: ');
const n2 = input.question('Digite a nota 2: ');
const n3 = input.question('Digite a nota 3: ');
const n4 = input.question('Digite a nota 4: ');
const n5 = input.question('Digite a nota 5: ');
const n6 = input.question('Digite a nota 6: ');

total = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) + parseFloat(n6);
media = total / 6;

if (media >= 7) {
    console.log(`Média = ${media.toFixed(2)}. Aluna aprovada`);
} else if (media >= 5 && media < 7) {
    console.log(`Média = ${media.toFixed(2)}. Aluna em recuperação`);
} else if (media < 5) {
    console.log(`Média = ${media.toFixed(2)}. Aluna reprovada`);
};
