//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

//VALOR DO JANTAR = X
//TAXA DO GARÇOM = 10% DE X
//VALOR A SER PAGO = X + 10% DE X

let ValorDoJantar = 150
let PercentualGarçom = 10 / 100
let TaxaDoGarçom = PercentualGarçom * ValorDoJantar
let TotalASerPago = ValorDoJantar + TaxaDoGarçom

console.log(`O valor total do jantar é ${TotalASerPago} reais.`)
