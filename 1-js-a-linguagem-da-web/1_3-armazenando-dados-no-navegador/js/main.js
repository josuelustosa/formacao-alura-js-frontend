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

  // verificando se o item cadastrado já existe na lista
  const existe = itens.find((elemento) => elemento.nome === nome.value);

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  // verificando se o item cadastrado já existe na lista
  if (existe) {
    itemAtual.id = existe.id;

    atualizaElemento(itemAtual);

    itens[itens.findIndex((elemento) => elemento.id === existe.id)] = itemAtual; // atualiza item do LocalStorage
  } else {
    itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
    criarElemento(itemAtual);

    itens.push(itemAtual); // incluindo um item em um objeto de itens para não sobrepor o item anterior
  }

  localStorage.setItem("itens", JSON.stringify(itens)); // tranformando o array de itens em JSON com JSON.stringfy(), já que o localStorage só aceita string

  valueNome.value = "";
  valueQuantidade.value = "";
});

function criarElemento(item) {
  const novoItem = document.createElement("li"); // cria uma tag li
  novoItem.classList.add("item"); // add uma class na tag li criada acima

  const numeroItem = document.createElement("strong"); // cria uma tag strong
  numeroItem.innerHTML = item.quantidade;
  numeroItem.dataset.id = item.id;
  novoItem.appendChild(numeroItem); // cria um elemento dentro de outro

  novoItem.innerHTML += item.nome;

  novoItem.appendChild(botaoDeleta(item.id)); // cria o botão de deletar item da lista ('li')

  lista.appendChild(novoItem);
}

function atualizaElemento(item) {
  document.querySelector("[data-id='" + item.id + "']").innerHTML =
    item.quantidade;
}

function botaoDeleta(id) {
  const elementoBotao = document.createElement("button");
  elementoBotao.innerText = "X";

  elementoBotao.addEventListener("click", function () {
    deletaElemento(this.parentNode, id);
  });

  return elementoBotao;
}

function deletaElemento(tag, id) {
  tag.remove();

  itens.splice(
    itens.findIndex((elemento) => elemento.id === id),
    1
  );

  localStorage.setItem("itens", JSON.stringify(itens));
}
