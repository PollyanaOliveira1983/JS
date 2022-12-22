const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

console.log(dados);

let dentro = 0;
let fora = 0;

for (let i = 0; i < dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        dentro = dentro + 1;
    }
    else{
        fora = fora + 1;
    }
}

console.log(`${dentro} Dentro `);
console.log(`${fora} Fora`);