export class PacoteServico {
  quantidade = 0;

  contabilizar() {
    this.quantidade += 1;
  }

  getSaldo() {
    return console.log(`saldo de servico utilizado ${this.quantidade}`);
  }
}
