//Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
import { question } from "readline-sync"
//entrada
const num = Number(question('Digite o número[ 3 dígitos ]: '))
//processamento
const centena = Math.floor(num/100)
const resto = num%100
const dezena = Math.floor(resto/10)
const unidade = resto%10
const soma = centena + dezena + unidade
//saída
console.log(`a soma dos algorismos de ${num} é igual à ${soma}`)
