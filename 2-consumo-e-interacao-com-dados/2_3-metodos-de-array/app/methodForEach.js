const elementoParaInserirLivros = document.getElementById("livros");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = "";

  listaDeLivros.forEach((livro) => {
    // Opção: função para verificar disponibilidade de Livros
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro);

    // Opção reduzida com if tenário para verificar disponibilidade de Livros
    let disponibilidade =
      livro.quantidade > 0 ? "livro__images" : "livro__images indisponivel";

    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
      <img
        class="${disponibilidade}"
        src="${livro.imagem}"
        alt="${livro.alt}"
      />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
      `;
  });
}

// Função para verificar disponibilidade de Livros
// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return "livro__images";
//   } else {
//     return "livro__images indisponivel";
//   }
// }
