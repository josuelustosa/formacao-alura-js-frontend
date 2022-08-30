const robotronName = "Robotron";
const subtrair = document.querySelector("#subtrair");
const braco = document.querySelector("#braco");
const somar = document.querySelector("#somar");

somar.addEventListener("click", (e) => {
  braco.value = parseInt(braco.value) + 1;
});

subtrair.addEventListener("click", (e) => {
  braco.value = parseInt(braco.value) - 1;
});
