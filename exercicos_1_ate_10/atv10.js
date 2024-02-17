//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import { question } from "readline-sync"
//entrada
const num1 = Number(question('Digite o primeiro valor: '))
const num2 = Number(question('Digite o segundo valor: '))
//processamento
const quociente = Math.floor(num1 / num2)
const resto = num1 % num2
//saída
console.log(`O quociente e o resto da deivisão de ${num1}/${num2} são respectivamente: ${quociente} e ${resto}`)