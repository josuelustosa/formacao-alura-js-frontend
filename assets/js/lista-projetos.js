const elementoParaInserirProjetos = document.querySelector("#listaDeProjetos");

function novalistaProjetos() {
  LISTA_DE_PROJETOS.forEach((dados, index) => {
    elementoParaInserirProjetos.innerHTML += `
    <h3>${dados.secao} (${dados.projeto.length})</h3>
    <div class="flex-start">
      ${dados.projeto
        .map((projeto) => {
          return `
        <div class="card">
          <img class="img-head" src="${
            projeto.img || "./assets/img/certificado-teste.png"
          }" alt="" />
          <div class="card-body">
            <h1 class="card-h1">${projeto.nome}</h1>
            <div class="flex-course-period">
              <span class="text-card course-period"
                ><img src="./assets/img/relogio.svg" alt="Ícone de Relógio" />${
                  projeto.carga_horaria
                }h</span
              >
              <span class="text-card course-period"
                ><img src="./assets/img/relogio.svg" alt="Ícone de Calendário" />${
                  projeto.data_final
                }</span
              >
            </div>
    
            <div class="badge-group">
              <p class="badge">css</p>
              <p class="badge">html</p>
              <p class="badge">Javascript</p>
              
            </div>
    
            <button class="card-button" type="button" onclick="window.location.href='${
              projeto.patch
            }'">Acessar Projeto</button>
          </div>
        </div>`;
        })
        .join("")}
    </div>`;
  });
}

novalistaProjetos();
