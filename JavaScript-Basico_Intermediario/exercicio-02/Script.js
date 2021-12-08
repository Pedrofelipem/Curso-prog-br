

/*Mudar o elemento para maiusculo ao clicar */

let t1 = document.getElementById("t1");

t1.onclick = mudarMaiusculo;

function  mudarMaiusculo(){

    this.innerHTML = this.innerHTML.toUpperCase();
}






