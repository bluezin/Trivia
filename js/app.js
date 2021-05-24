import data from "./data.js";

import {
  unicTemplate,
  responseIncorrectTemplate,
  resultTemplate,
  responseCorrectTemplate,
  presentionTemplate,
} from "./template.js";

let number = 0;

let valorSelected = "";
let puntaje = 100;

function mostrar() {
  let container = document.getElementById("section");
  container.innerHTML = presentionTemplate(puntaje, data, number);

  const { another } = data[number];

  let answers = document.getElementById("answers");
  let mape = another.map((item) => `<button>${item}</button>`).join("");

  answers.innerHTML = mape;

  for (let i = 0; i < answers.childNodes.length; i++) {
    answers.childNodes[i].onclick = (event) => result(event);
    answers.childNodes[i].className = "p-answer";
  }

  container.childNodes[2].onclick = sendResponse;
}

function sendResponse() {
  let addButtonClick;

  if (valorSelected) {
    if (valorSelected === data[number].answer) {
      puntaje += 20;
      window.section.innerHTML = responseCorrectTemplate(
        puntaje,
        valorSelected,
        data,
        number
      );
      addButtonClick = window.section.childNodes[9];
      addButtonClick.onclick = aumentNumber;
    } else {
      puntaje -= 20;
      window.section.innerHTML = responseIncorrectTemplate(
        puntaje,
        valorSelected,
        data,
        number
      );
      addButtonClick = window.section.childNodes[15];
      addButtonClick.onclick = aumentNumber;
    }
  }
}

function result(event) {
  let response = event.target.innerText;
  valorSelected = response;
}

function aumentNumber() {
  if (number !== 9) {
    number++;
    mostrar();
    valorSelected = "";
  } else {
    window.section.innerHTML = resultTemplate(puntaje, playAgain);
    window.section.childNodes[0].children[5].onclick = playAgain;
  }
}

function playAgain() {
  number = 0;
  puntaje = 100;
  mostrar();
}

window.addEventListener("load", () => {
  window.section.innerHTML = unicTemplate();
  window.section.childNodes[1].children[4].onclick = mostrar;
});

export { aumentNumber };
