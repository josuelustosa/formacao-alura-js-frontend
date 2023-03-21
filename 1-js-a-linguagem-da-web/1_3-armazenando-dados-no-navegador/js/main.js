const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

const itens = []; // array de itens salvos

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valueNome = evento.target.elements["nome"];
  const valueQuantidade = evento.target.elements["quantidade"];

  criarElemento(
    valueNome.value ? valueNome.value : "Vazio",
    valueQuantidade.value ? valueQuantidade.value : "0"
  );

  valueNome.value = "";
  valueQuantidade.value = "";
});

function criarElemento(nome, quantidade) {
  const novoItem = document.createElement("li"); // cria uma tag li
  novoItem.classList.add("item"); // add uma class na tag li criada acima

  const numeroItem = document.createElement("strong"); // cria uma tag strong
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem); // cria um elemento dentro de outro
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual); // incluindo um item em um objeto de itens para não sobrepor o item anterior

  localStorage.setItem("item", JSON.stringify(itens)); // tranformando o array de itens em JSON com JSON.stringfy(), já que o localStorage só aceita string
}
