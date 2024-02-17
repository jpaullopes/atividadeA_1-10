//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import { question } from "readline-sync"

//entrada

const cotacao_dolar = Number(question("Digite a cotação do dolar: "))
const valor_real = Number(question("Digite a contia da conversão: "))

//processamento

const conversao = valor_real*cotacao_dolar

//saída

console.log(`A quantia convertida é igual à: ${conversao.toFixed(2)}R$`)