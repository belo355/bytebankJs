import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ana", 11112223333);

const contaCorrente1 = new ContaCorrente("1001", cliente1, 0, "padrao");
const contaPoupanca1 = new ContaPoupanca("1002", cliente1, 0, "padrao");

contaPoupanca1.depositar(1000); 
contaPoupanca1.sacar(500); 

contaCorrente1.depositar(1000); 
contaCorrente1.sacar(500);

console.log(contaCorrente1); 
console.log(contaPoupanca1); 
