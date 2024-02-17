//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import { question } from "readline-sync"
//entrada
const numA = Number(question('Digite o numero A: '))
const numB = Number(question('Digite o numero B: '))
//processamento
const ordem_inversa = `(${numB},${numA})`
//saída
console.log(`O inverso de(${numA},${numB}) é ${ordem_inversa}.`)