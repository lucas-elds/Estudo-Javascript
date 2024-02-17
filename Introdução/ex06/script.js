// Faça um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.

let saida = document.getElementById("saida");

let cotacao = parseFloat(prompt("Cotação do dólar:"));
let dolar = parseFloat(prompt("Quanto você tem em dólares?")).toFixed(2);
let conv = (dolar * cotacao).toFixed(2);

saida.innerHTML = "U$" + dolar + " -> " + "R$" + conv;
