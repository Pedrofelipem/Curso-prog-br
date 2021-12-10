const tela = document.querySelector("tela");

const ctx = tela.getContext("2d");

// Linhas
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0);
ctx.lineWidth = 3;
ctx.strokeStyle = "red";
ctx.stroke();

// Retângulos
ctx.fillStyle = "blue";
ctx.fillRect(20, 380, 150, 100);

ctx.strokeRect(330, 380, 150, 100);

ctx.rect(200, 330, 100, 150);
ctx.fill();
ctx.stroke();

ctx.clearRect(40, 420, 400, 20);

// Path
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "green";
ctx.moveTo(25, 75);
ctx.lineTo(200, 250);
ctx.lineTo(25, 250);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Circulo
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "red";

let x = 250;
let y = 250;
let raio = 50;
let inicio = 0;
let fim = 2 * Math.PI;

ctx.arc(x, y, raio, inicio, fim);
ctx.fill();
ctx.stroke();