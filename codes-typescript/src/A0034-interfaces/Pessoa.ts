export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) { }

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TipoPessoa2 = {
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
  nome: 'Arthur',
  sobrenome: 'Agora tá ok',
};

/*Chamadas*/
const pessoa = new Pessoa('Arthur', 'Vinicius');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());

