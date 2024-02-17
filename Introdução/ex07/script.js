// O restaurante a quilo Bem-Bão cobra R$25,00 por cada quilo de refeição. Faça um programa que leia o peso do prato montado pelo cliente (em quilos) e exiba o valor a pagar. Assuma que a balança já desconte o peso do prato.

let saida = document.getElementById("saida");

let valorKG = 25;
let peso = parseFloat(prompt("Peso do prato (kg): "));
let valorPagar = peso * valorKG;

saida.innerHTML = "Valor a pagar: R$" + valorPagar.toFixed(2);
