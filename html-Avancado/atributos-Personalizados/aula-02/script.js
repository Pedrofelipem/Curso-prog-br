let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("data-num"));

conteudo = "";

for (let i = 0; i < num; i++) {

    conteudo += "<li>" + i + "<li>";

}

lista.innerHTML = conteudo;