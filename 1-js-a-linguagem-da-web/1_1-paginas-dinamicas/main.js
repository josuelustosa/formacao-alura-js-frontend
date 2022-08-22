function tocaSom(seletorAudio) {
  const elementoAudio = document.createElementquerySelector(seletorAudio);

  if (elementoAudio && elemento.localName === "audio") {
    elementoAudio.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido!");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (const elementoTeclas of listaDeTeclas) {
  const tecla = elementoTeclas;
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
