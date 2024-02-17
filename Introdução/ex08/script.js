// Faça um programa que leia o nome de um aluno e as notas das três provas que ele obteve no semestre. No final informar o nome do aluno e a sua média (aritmética).

let saida = document.getElementById("saida");

let nome = prompt("Nome do aluno:");
let n1 = parseInt(prompt("Nota 1:"));
let n2 = parseInt(prompt("Nota 2:"));
let n3 = parseInt(prompt("Nota 3:"));
let media = ((n1 + n2 + n3) / 3).toFixed(1);

saida.innerHTML = "Lucas, Média: " + media;
