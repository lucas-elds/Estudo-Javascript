// Escreva um programa para calcular a área de um triângulo, dados os valores de base e altura.

let saida = document.getElementById("saida");

let base = parseInt(prompt("Base:"));
let altura = parseInt(prompt("Altura:"));
let area = (base * altura) / 2;

saida.innerHTML = "Área: " + area;
