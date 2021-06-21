import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { PacoteServico } from "./PacoteServico.js";
import { Conta } from "./Conta.js";

const pacote = new PacoteServico();

const cliente1 = new Cliente("Ana", 11112223333);

const contaCorrente1 = new ContaCorrente("1001", cliente1, 0);
const contaPoupanca1 = new ContaPoupanca("1002", cliente1, 0);

contaCorrente1.pacote = pacote;

contaCorrente1.depositar(1000);

contaCorrente1.transferir(500, contaPoupanca1);

contaCorrente1.sacar(100); 


console.log(contaCorrente1);
console.log(contaPoupanca1);
console.log(`quantidade de contas no sistema ${Conta.quantidadeContas}`);
