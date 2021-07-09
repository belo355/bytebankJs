import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Cliente } from "./Cliente.js";
import { SistemaAuth } from "./SistemaAuth.js"; 

const diretor = new Diretor("ana", 10000, 123123141); 
const gerente = new Gerente("ana", 5000, 312412313); 
const cliente = new Cliente("celina", 238198173189, "12313"); 

diretor.cadastrarSenha("123456745"); 
gerente.cadastrarSenha("1234567"); 

const diretorLogin = SistemaAuth.login(diretor, "123456745"); 
const gerenteLogin = SistemaAuth.login(gerente, "1234567"); 
const clienteLogin = SistemaAuth.login(cliente, "12313"); 


console.log(diretorLogin); 
console.log(gerenteLogin); 
console.log(clienteLogin); 
