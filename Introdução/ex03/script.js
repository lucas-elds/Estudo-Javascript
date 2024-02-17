// Faça um programa que leia dois números reais, calcule e exiba a soma deles.

let saida = document.getElementById("saida");

let n1 = parseFloat(prompt("Digite um número"));
let n2 = parseFloat(prompt("Digite outro número"));

saida.innerHTML = `${n1} + ${n2} = ${n1 + n2}`;
