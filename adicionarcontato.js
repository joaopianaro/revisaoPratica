function AdicionarContato() {
    let idUsuario = contatos.length + 1;
    let nomeUsuario = String(prompt("Insira o nome do usuario: "));
    let telefoneUsuario = prompt("insira o telefone do usuario: ");
    let emailUsuario = prompt("insira o email do usuario:");
    contatos.push({
      id: idUsuario,
      nome: nomeUsuario,
      telefone: telefoneUsuario,
      email: emailUsuario,
    });
    console.log("\ncontatos adicionados com sucesso");
    menu();
  }

  module.exports = {AdicionarContato}
