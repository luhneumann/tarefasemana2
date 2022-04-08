//Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

//60 reais por DIA
//0,15 centavos por KM

let KmPercorridos = 75
let NumeroDeDiasAlugados = 7
let ValorTotalDias = 60 * NumeroDeDiasAlugados
let ValorTotalKm = 0.15 * KmPercorridos
let PreçoAPagar = ValorTotalDias + ValorTotalKm

console.log(`O valor total a pagar é ${PreçoAPagar} reais`)
