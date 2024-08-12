/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suits = ["♦", "♥", "♠", "♣"];
let numbers = [
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
  "K"
];

window.onload = function() {
  generateCard();

  document.querySelector("#changeCard").addEventListener("click", () => {
    generateCard();
  });
};

setInterval(generateCard, 10000);

function generateCard() {
  const randomNumbers = Math.floor(Math.random() * numbers.length);
  const randomSuits = Math.floor(Math.random() * suits.length);

  const numberCard = document.querySelector("#centerCard");
  numberCard.innerHTML = numbers[randomNumbers];
  const suitCardTop = document.querySelector("#cornerTop");
  suitCardTop.innerHTML = suits[randomSuits];
  const suitCardBottom = document.querySelector("#cornerBottom");
  suitCardBottom.innerHTML = suits[randomSuits];

  if (suits[randomSuits] == "♦" || suits[randomSuits] == "♥") {
    document.querySelector(".card").style.color = "red";
  } else {
    document.querySelector(".card").style.color = "black";
  }
}
