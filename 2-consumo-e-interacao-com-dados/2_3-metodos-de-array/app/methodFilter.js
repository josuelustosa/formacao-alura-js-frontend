const botoes = document.querySelectorAll(".btn");

botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBtn = document.getElementById(this.id);
  const categoria = elementoBtn.value;

  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarLivrosDisponiveis()
      : filtrarLivrosPorCategoria(categoria);

  console.table(livrosFiltrados);
  exibirOsLivrosNaTela(livrosFiltrados);

  if (categoria == "disponivel") {
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
  }
}

function filtrarLivrosDisponiveis() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function filtrarLivrosPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
  elementoValorTotalDelivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}
