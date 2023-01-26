let name = prompt("Olá! Qual o seu nome?")
alert(
  "Seja bem-vindo, " +
    name +
    ", este é o desafio(01) de JavaScript do Stage 4. Vamos começar?"
)

let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")

let result1 = Number(numberOne) + Number(numberTwo)
let result2 = Number(numberOne) - Number(numberTwo)
let result3 = Number(numberOne) * Number(numberTwo)
let result4 = Number(numberOne) / Number(numberTwo)
let result5 = Number(numberOne) % Number(numberTwo)

alert("A soma dos números é igual a: " + Number(result1) + ".")
alert("A subtração dos números é igual a: " + Number(result2) + ".")
alert("A multiplicação dos números é igual a: " + Number(result3) + ".")
alert("A divisão dos números é igual a: " + Number(result4) + ".")
alert("O resto da divisão dos dois números é igual a: " + Number(result5) + ".")
alert("O resto da divisão dos dois números é igual a: " + Number(result5) + ".")

if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}

var result6 = result1 % 2 == 0 ? 'Par' : 'Ímpar'
alert("O resultado da soma dos números inseridos (" + result1 + ") é " + result6 + " . ")
