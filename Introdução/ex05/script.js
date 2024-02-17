// Escreva um programa para ler o nome e o sobrenome de uma pessoa e escrevê-los na seguinte forma: sobrenome seguido por uma vírgula e pelo nome

let saida = document.getElementById("saida");

let nome = prompt("Primeiro nome:");
let sobrenome = prompt("Sobrenome:");

saida.innerHTML = sobrenome + ", " + nome;
