// COMO PEGAR UM ELEMENTO DO HTML POR ID

const elem = document.getElementById("dados");
console.log(elem);

// COMO PEGAR O CONTEÚDO DENTRO DE UM ELEMENTO HTML

const conteudo = elem.innerHTML;
console.log(conteudo);

// COMO RECORTAR UM STRING COM BASE EM UM SEPARADOR

const nomeCompleto = "Maria Silva Borges";
const result1 = nomeCompleto.split(' ');
console.log(result1);

// COMO RECORTAR UM STRING COM BASE EM UMA QUEBRA DE LINHA

const result2 = conteudo.split('\n');
console.log(result2);

// COMO CONVERTER UM ARRAY DE STRINGS EM UM ARRAY DE NÚMEROS

const str = "4.5";
console.log(str);
const n = Number(str);
console.log(n);

// CONVERTER VETOR DE STRINGS EM UM VETOR DE NUMBER

const numeros = result2.map(x => Number(x));
console.log(numeros);

// COMO MOSTRAR UM NÚMERO COM ARREDONDAMENTO

console.log(numeros[0].toFixed(2));

// COMO MOSTRAR UM NÚMERO COM ARREDONDAMENTO

const x = 3.456;

console.log(x.toFixed(2));
