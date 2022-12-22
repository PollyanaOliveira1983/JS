const dados = document.getElementById("dados").innerHTML;


const n = Number(dados);

for (let i=1; i<10; i++) {
    const result = i * n;
    console.log(`${n} x ${i} = ${result}`);
}


