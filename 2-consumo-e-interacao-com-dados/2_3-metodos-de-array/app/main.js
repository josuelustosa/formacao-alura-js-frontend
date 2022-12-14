let livros = [];

const endPointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";


getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const response = await fetch(endPointAPI)
    livros = await response.json()
    console.log("LIVROS DA ALURA: ", livros)
    
    // Console exibe o array em tabela
    // console.table(livros)
}
