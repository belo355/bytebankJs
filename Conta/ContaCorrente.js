import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta {

  constructor(agencia, cliente, saldoInicial, tipoPacote) {
    super(agencia, cliente, saldoInicial, tipoPacote );
  }

  sacar(valor) {
    let taxa = 1.1; 
    return super._sacar(valor, taxa); 
  }
}
