const robotronName = "Robotron";
const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", (evento) => {
  console.log(evento);
});

function dizOi(nome) {
  console.log("Olá, " + nome + "!");
  console.log(`Bem-vindo ao ${robotronName}`);
}

dizOi("Josué");
