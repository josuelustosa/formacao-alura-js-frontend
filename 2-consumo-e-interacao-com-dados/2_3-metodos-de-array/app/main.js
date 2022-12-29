let livros = [];

const endPointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endPointAPI);
  livros = await response.json();

  livros = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
