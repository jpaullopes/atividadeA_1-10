//Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { question } from "readline-sync"
//entrada
const num1 = Number(question("Digite o primeiro número: "))
const num2 = Number(question("Digite o segundo número: "))
const num3 = Number(question("Digite o terceiro número: "))
//processamento
const soma = num1 + num2
const diferenca = Math.abs(num2 - num3) //faz com que a difrença não seja um número negativo
//saída
console.log(`A soma entre os dois primeiro número é de ${soma}
A difrença entre os dois últimos números é de ${diferenca}`)