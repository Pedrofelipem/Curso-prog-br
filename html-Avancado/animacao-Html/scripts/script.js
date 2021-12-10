let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moverJogador(x, y) {
    let posicaoX = x + "px";
    let posicaoY = y + "px";

    jogador.style.top = posicaoX;
    jogador.style.left = posicaoY;
}

setInterval(function() {
    moverJogador(xInicial++, yInicial++);
}, 100);