export class ContaCorrente {
  agencia;
  cliente;

  _saldo = 0;

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

  getSaldo() {
    return _saldo;
  }

  transferir(valor, conta) {
    if (valor > this._saldo) return 

    conta.depositar(this.sacar(valor));
  }
}
