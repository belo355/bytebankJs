import { PacoteServico } from "./PacoteServico.js";

export class Conta {
  static quantidadeContas = 0;
  pacoteServico; 

  constructor(agencia, cliente, saldoInicial) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = saldoInicial;
    this.quantidadeContas++;
    this.pacoteServico = new PacoteServico(); 
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo -= valor;
      return valor;
    } else {
      console.log("Saldo insuficiente para saque");
    }
    // pacoteServico.contabilizar(); RESOLVER
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo = valor;
    // pacoteServico.contabilizar(); RESOLVER
  }

  get saldo() {
    return this._saldo;
  }

  transferir(valor, conta) {
    if (valor > this._saldo) return;
    conta.depositar(this.sacar(valor));
    // pacoteServico.contabilizar(); RESOLVER
  }
}
