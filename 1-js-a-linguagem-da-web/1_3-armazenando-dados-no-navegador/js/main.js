const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

const itens = JSON.parse(localStorage.getItem("itens")) || []; // array de itens salvos

itens.forEach((elemento) => {
  criarElemento(elemento);
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valueNome = evento.target.elements["nome"];
  const valueQuantidade = evento.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criarElemento(itemAtual);

  itens.push(itemAtual); // incluindo um item em um objeto de itens para não sobrepor o item anterior

  localStorage.setItem("itens", JSON.stringify(itens)); // tranformando o array de itens em JSON com JSON.stringfy(), já que o localStorage só aceita string

  valueNome.value = "";
  valueQuantidade.value = "";
});

function criarElemento(item) {
  const novoItem = document.createElement("li"); // cria uma tag li
  novoItem.classList.add("item"); // add uma class na tag li criada acima

  const numeroItem = document.createElement("strong"); // cria uma tag strong
  numeroItem.innerHTML = item.quantidade;
  novoItem.appendChild(numeroItem); // cria um elemento dentro de outro

  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}
