function listarContatos() {
    contatos.forEach((contato) => {
      console.log(
        `\nID: ${contato.id}, Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`
      );
    });
    menu();
  }
  module.exports = {listarContatos}
