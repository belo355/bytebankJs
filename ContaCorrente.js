import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {

  constructor(agencia, cliente, saldoInicial) {
    super(agencia, cliente, saldoInicial);
  }

  sacar(valor) {
    let taxa = 1.1; 
    if (this._saldo > valor) {
      this._saldo -= valor * taxa;
      return valor;
    } else {
      console.log("Saldo insuficiente para saque");
    }
    // pacoteServico.contabilizar(); RESOLVER
  }
}
