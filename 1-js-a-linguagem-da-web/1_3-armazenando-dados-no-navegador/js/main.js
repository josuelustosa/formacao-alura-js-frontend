const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  criarElemento(
    (evento.target.elements["nome"].value ? evento.target.elements["nome"].value : 'Vazio'),
    (evento.target.elements["quantidade"].value ? evento.target.elements["quantidade"].value : '0')
  );
});

function criarElemento(nome, quantidade) {
  const novoItem = document.createElement("li"); // cria uma tag li
  novoItem.classList.add("item"); // add uma class na tag li criada acima

  const numeroItem = document.createElement("strong"); // cria uma tag strong
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem); // cria um elemento dentro de outro
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);
}
