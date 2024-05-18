//Variables
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "k"
];
const symbols = ["♦", "♥", "♠", "♣"];

//funcion carta aletaria
function cartaAleatoria() {
  let numbersAleatoria = numbers[Math.floor(Math.random() * numbers.length)];
  let symbolsAleatoria = symbols[Math.floor(Math.random() * symbols.length)];
  return { numbers: numbersAleatoria, symbol: symbolsAleatoria };
}

//elementos para mostrar en el dom
function mostrarCarta() {
  const card = cartaAleatoria();
  const cardElement = document.querySelector(".card");
  const symbol1Element = cardElement.querySelector(".symbol1");
  const numbersElement = cardElement.querySelector(".numbers");
  const symbol2Element = cardElement.querySelector(".symbol2");

  //valores aleatorios
  symbol1Element.textContent = card.symbol;
  numbersElement.textContent = card.numbers;
  symbol2Element.textContent = card.symbol;

  //simbolos rojos
  if (card.symbol === "♥" || card.symbol === "♦") {
    cardElement.classList.add("red");
  } else {
    cardElement.classList.remove("red");
  }
}
mostrarCarta();
//escucha del evento
let buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", mostrarCarta);
