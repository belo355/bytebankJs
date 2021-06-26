export class PacoteServico {

  tipo; 
  _quantidade; 

  constructor(tipo){
    this.tipo = tipo; 
    this._quantidade = 0; 
  } 

  set quantidade(qtdServico){
    this._quantidade += qtdServico; 
  }

  get quantidade() {
    return this._quantidade; 
  }
}
