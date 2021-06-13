import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ana";
cliente1.cpf = 11112223333;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 111122233343;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = "1001";
contaCorrente1.cliente = cliente1; 

const contaCorrente2 = new ContaCorrente();
contaCorrente2.agencia = "1001";
contaCorrente2.cliente = cliente2; 

contaCorrente1.depositar(1000); 
contaCorrente1.transferir(500, contaCorrente2); 

console.log(contaCorrente1);
console.log(contaCorrente2);
