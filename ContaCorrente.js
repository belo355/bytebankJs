export class ContaCorrente {
  
  static quantidadeContas=0; 
  agencia;
  cliente;
  pacote; 

  _saldo = 0;

  constructor(agencia, cliente){
    this.agencia = agencia; 
    this.cliente = cliente; 
    ContaCorrente.quantidadeContas++;
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo -= valor;
      return valor;
    } else {
      console.log("Saldo insuficiente para saque");
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo = valor;
  }

  get saldo(){
    return this._saldo; 
  }

  transferir(valor, conta) {
    if (valor > this._saldo) return 

    conta.depositar(this.sacar(valor));
  }
}
