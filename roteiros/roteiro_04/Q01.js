const arr = [1, 60, 232, 7, 25, 76, 29, 74, 92]
const lista = []
const somatorio = 0

lista = arr.filter(element => element > 60 && element < 300)
lista.forEach(element => somatorio += element)

console.log(`A lista dos valores maiores que
60 é: ${lista}. A soma dos elementos da lista é: ${somatorio}."`)