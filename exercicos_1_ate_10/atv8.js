//Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import { question } from "readline-sync"
//entrada
const num1 = Number(question('Digite o primeiro número: '))
const num2 = Number(question('Digite o segundo número: '))
//processamento
const calculo = (num1 + num2) / Math.abs(num1 - num2)
//saída
console.log(`A divisão da soma pela subtração de ${num1} e ${num2} é igual a: ${calculo.toFixed(2)}.`)
