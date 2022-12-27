let livros = [];

const endPointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

const elementoParaInserirNumeros = document.getElementById("livros");

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endPointAPI);
  livros = await response.json();

  // Console exibe o array em tabela
  console.table(livros);

  exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaDeLivros) {
  listaDeLivros.forEach((livro) => {
    elementoParaInserirNumeros.innerHTML += `
    <div class="livro">
    <img
      class="livro__images"
      src="${livro.imagem}"
      alt="${livro.alt}"
    />
    <h2 class="livro__titulo">
      ${livro.titulo}
    </h2>
    <p class="livro__descricao">${livro.autor}</p>
    <p class="livro__preco" id="preco">${livro.preco}</p>
    <div class="tags">
      <span class="tag">${livro.categoria}</span>
    </div>
  </div>
    `;
  });
}
