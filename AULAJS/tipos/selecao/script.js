const item1 = document.querySelector("li");

console.log(item1);
console.log(item1.innerHTML);
console.log(item1.outerHTML);

const items = document.querySelectorAll("li");

console.log(items);

const card1 = document.querySelector(".card");

console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo);

card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");

//como era usado antes
//const cards = document.getElementsByClassName("card");

console.log(cards);
console.log(cards[0]);

Array.from(cards).map(item => {
    console.log(item.innerHTML);
})

