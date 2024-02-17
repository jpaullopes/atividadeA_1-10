//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import { question } from "readline-sync"
//entrada
var minutos_totais = Number(question('Digite os minutos: '))
//processamento
var horas = Number.parseInt(minutos_totais / 60)
var min = Number.parseInt(minutos_totais % 60)
//saída
console.log(`O resultado será ${horas}:${min} hrs/mins`)