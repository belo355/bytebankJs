class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  _saldo = 0;

  sacar(valor) {
    if (this._saldo > valor){
      this._saldo -= valor;
      return valor; 
    } else {
      console.log("Saldo insuficiente para saque");
    }
  }

  depositar(valor){
      if(valor <= 0) return
      this._saldo = valor; 
  }

  getSaldo(){
    return _saldo; 
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Ana";
cliente1.cpf = 11112223333;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.agencia = "1001";
contaCorrente1.depositar(400);
const valorSaque = contaCorrente1.sacar(210);
console.log(`valor saque ${valorSaque}`);

console.log(`saldo conta corrente ${contaCorrente1._saldo}`);

