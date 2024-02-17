//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
import {question} from 'readline-sync'
//entrada
var velocidade = Number(question('qual a velocidade:[M/S] '))
//processamento
var velocidade_km = Number(velocidade*3.6)
//saída
console.log(`${velocidade} é em quilometros por hora = ${velocidade_km.toFixed(2)} km/h.`)

