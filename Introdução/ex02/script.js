// 2. Escreva um programa que leia um número inteiro e exiba o dobro dele.

let saida = document.getElementById("saida");

let num = parseInt(prompt("Digite um número"));

saida.innerHTML = `O dobro de ${num} é ${num * 2}`;
