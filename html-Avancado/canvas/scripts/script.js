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

let circulo = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI,
}

function drawCirculo(c) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    ctx.fill();
    ctx.stroke();
}

drawCirculo(circulo);