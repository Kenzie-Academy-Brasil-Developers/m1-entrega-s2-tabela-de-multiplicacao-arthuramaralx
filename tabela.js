

function tabelaDeMultiplicacao (num){
let tabela = []
let numMultiplicado;

  for (let i = 0; i <=num; i++){
    let linha = [];
      for (let j = 0; j <=num; j++){
         numMultiplicado =  i * j ;
       linha.push(numMultiplicado)
      }

      tabela.push(linha)
  }

   console.table(tabela)

}
console.log(tabelaDeMultiplicacao(16))