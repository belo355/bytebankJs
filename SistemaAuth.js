export class SistemaAuth {

  static login(autenticavel, senha) {
    if(SistemaAuth.ehAuth(autenticavel)){
      return autenticavel.autenticar(senha);
    }
      return false; 
  }

  static ehAuth(autenticavel){
    return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; 
  }
}
