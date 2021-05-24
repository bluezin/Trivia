function unicTemplate() {
  return `
  <div>
  <h1>Juega la trivia</h1>
  <img src="../images/homero.jpg" alt="homero">
  <p>Esta trvia trata acerca de la historia de Perú</p>
  <strong>Sumate, aprende y diviertete un rato !!!</strong>
  <button type="button" id="play">Play</button>
  </div>
  `;
}

function presentionTemplate(puntaje, data, number) {
  return `<div>
    <p class="p-points"><img src="../images/coin.svg" alt="coin"> ${puntaje} Puntos</p>
    <p class="strong-question">${data[number].question}</p>
    <p class="p-util">Por 20 puntos</p>
    <p id="points"></p>
    <div id="answers">
    </div></div>
    <button id="send" class="button-reusable">Enviar</button>
  `;
}

function resultTemplate(puntaje) {
  return `<div>
  <h2>Resultado</h2>
  <h4>Puntaje final ${puntaje}</h4>
  <strong class="p-result-util">${
    puntaje > 50
      ? "Lo hiciste muy bien sigue asi!!! "
      : "Sigue intentando, no te rindas!!!!"
  }</strong>
  <div class="div-img"><img src="../images/homero2.jpg" alt="homero"></div>
  <p class="p-result-util ">Reta a tus contactos , y diviertanse aprendiendo mas sobre la historia de Perú 😁</p>
  <button class="button-reusable button-finish">Juega de nuevo</button>
  </div>`;
}

function responseCorrectTemplate(puntaje, valorSelected, data, number) {
  return `
  <p class="p-points"><img src="../images/coin.svg" alt="coin"> ${puntaje} Puntos</p>
  <p class="p-result-satisfact">Bien hecho!</p>
  <p class="p-selected-correct">${valorSelected}</p>
  <p>¿Sabias que... 
  <small>${data[number].information}</small></p>
  <a>
   <button class="button-reusable">Siguiente</button>
  </a>
`;
}

function responseIncorrectTemplate(puntaje, valorSelected, data, number) {
  return `
  <p class="p-points"><img src="../images/coin.svg" alt="coin"> ${puntaje} Puntos</p>
  <p class="p-no-result">Buen intento!</p>
  <p class="p-selected-no-correct">${valorSelected}</p>
  <p class="p-util">Respuesta correcta:</p>
  <p class="p-selected-correct">${data[number].answer}</p>
  <p>¿Sabias que... 
  <small>${data[number].information}</small></p>
  <br />
  <a>
   <button class="button-reusable">Siguiente</button>
  </a>
`;
}

export {
  unicTemplate,
  responseIncorrectTemplate,
  resultTemplate,
  responseCorrectTemplate,
  presentionTemplate,
};
