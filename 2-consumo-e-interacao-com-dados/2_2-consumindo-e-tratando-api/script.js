async function buscaEndereco(cep) {
  try {
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPConvertida = await consultaCEP.json();

    if (consultaCEPConvertida.erro) {
      throw Error("Esse CEP não existe!");
    }
    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;
  } catch (erro) {
    console.log("Requisição falhou\n", erro);
  }
}

let ceps = ["69058827", "69075830", "69059360"];
let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));