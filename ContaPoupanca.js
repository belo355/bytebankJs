import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

  constructor(saldoInicial, cliente, agencia, tipoPacoteServico) {
    super(saldoInicial, cliente, agencia, tipoPacoteServico );
  }
}
