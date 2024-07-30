const prompt = require("prompt-sync")({ signit: true });
const {AdicionarContato} = require('./adicionarcontato')
const {listarContatos} = require('./listarcontatos')
const {RemoverContato} = require('./removercontatos')
let contatos = [
  { id: 1, nome: "Alice", telefone: "1234-5678", email: "alice@example.com" },
  { id: 2, nome: "Bob", telefone: "8765-4321", email: "bob@example.com" },
  { id: 3, nome: "Carol", telefone: "5678-1234", email: "carol@example.com" },
];

menu();

function menu() {
  console.log(`
    1 - listar contatos
    2 - adicionar contato
    3 - remover contato
    4 - sair`);
  let pergunta = +prompt("digite o numero da opçao que deseja realizar ");

  switch (pergunta) {
    case 1:
      listarContatos();
      break;
    case 2:
      AdicionarContato();
      break;
    case 3:
      RemoverContato();
      break;
    case 4:
      console.log("saindo");
      break;
    default:
      console.log("algo deu errado");
      break;
  }
}
