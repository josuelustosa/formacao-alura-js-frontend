var consultaCEP = fetch("https://viacep.com.br/ws/69058827/json/")
  .then((resposta) => resposta.json())
  .then((r) => {
    if (r.erro) {
      throw Error("Esse CEP não existe!");
    } else {
      console.log("Requisição bem-sucedida:\n", r);
    }
  })
  .catch((erro) => console.log("Requisição falhou\n", erro))
  .finally((mensagem) => console.log("Requisição Finalizada :)"));

console.log(consultaCEP);
