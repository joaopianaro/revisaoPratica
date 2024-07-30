function RemoverContato() {
    idRemover = +prompt("\ndigite o id do usuario que deseja remover ");
    contatos.pop(contatos[idRemover - 1]);
    menu();
  }
module.exports = (RemoverContato)  
