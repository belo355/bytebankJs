import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {PacoteServico} from "./PacoteServico.js";

const pacote = new PacoteServico(); 

const cliente1 = new Cliente("Ana", 11112223333);

const contaCorrente1 = new ContaCorrente("1001", cliente1);
const contaCorrente2 = new ContaCorrente(); 

contaCorrente1.pacote = pacote; 

contaCorrente1.depositar(1000); 
pacote.contabilizar(); 
contaCorrente1.transferir(500, contaCorrente2); 
pacote.contabilizar(); 

console.log(contaCorrente1);
console.log(`quantidade de contas no sistema ${ContaCorrente.quantidadeContas}`);


