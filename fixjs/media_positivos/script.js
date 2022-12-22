const dados = document.getElementById("dados").innerHTML.split("\n").map(x => Number(x));

let soma = 0;
let cont = 0;

for (let i = 1; i < dados.length; i++) {
    if (dados[i] > 0 ) {
        soma = soma + dados[i];
        cont = cont + 1;
        
    }
        
}   
if (cont === 0){
    console.log("IMPOSSIVEL CALCULAR"); 
         
} 
else {
    const media = soma / cont;
    console.log(media.toFixed(2)); 
}

