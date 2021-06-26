import { PacoteServico } from "./PacoteServico.js";

export class Conta {
  static quantidadeContas = 0;

  constructor(agencia, cliente, saldoInicial, tipoPacote) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = saldoInicial;
    this.quantidadeContas++;
    this.pacoteServico = new PacoteServico(tipoPacote); //todo entender como resolver pcote de servico
  }

  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    if (this._saldo > (valor * taxa)) {
      this._saldo -= (valor * taxa);
      return valor;
    } else {
      console.log("Saldo insuficiente para saque");
      return 0; 
    }
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  get saldo() {
    return this._saldo;
  }

  transferir(valor, conta) {
    if (valor > this._saldo) return;
    conta.depositar(this.sacar(valor));
  }
}
