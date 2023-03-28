const elementoParaInserirProjetos = document.querySelector("#listaDeProjetos");

function listarProjetos() {
  LISTA_DE_PROJETOS.forEach((dados, index) => {
    elementoParaInserirProjetos.innerHTML += `
      <ul id="${dados.id_secao}">
        ${index + 1 + ". " + dados.secao}
        ${dados.projeto
          .map((projeto) => {
            return (
              `<li id="${projeto.id_projeto}">` +
              `<a href="${projeto.patch}">` +
              projeto.nome +
              `</a>` +
              ` - ` +
              projeto.carga_horaria +
              `hrs` +
              `</li>`
            );
          })
          .join("")}
      </ul>
    `;
  });
}

listarProjetos();
