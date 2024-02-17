//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import { question } from 'readline-sync'
//entrada
var horas = Number(question("Digite o horario[horas]: "))
var min = Number(question("digite os minutos: "))
//prcessamento
var total = (horas * 60) + min
//saída
console.log(`A soma das horas e dos minutos é igual à ${total} minutos`)

