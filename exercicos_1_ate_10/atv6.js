//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import { question } from "readline-sync"
console.log('CONVERSOR DE VELOCIDADE')
//entrada
const velocidade_km_h = Number(question('Digite a velocida que você quer converter[KM/H]: '))
//processamento
const conversao = velocidade_km_h/ 3.6
//saída
console.log(`${velocidade_km_h}Km/h equivalem à ${conversao.toFixed(2)}m/s`)