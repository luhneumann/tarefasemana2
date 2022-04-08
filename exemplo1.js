//Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.

let PreçoMercadoria = 250
let PercentualDesconto = 20 / 100
let ValorDoDesconto = PreçoMercadoria * PercentualDesconto
let PreçoAPagar = PreçoMercadoria - ValorDoDesconto

console.log(`O valor do desconto é R$ ${ValorDoDesconto}`)
console.log(`O valor a pagar é R$ ${PreçoAPagar}`)
