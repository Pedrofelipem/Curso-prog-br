
/* Array e for 
var alunos = ["Pedro", "Felipe", "Paulo", "Sabrina"];

for(var i = 0; i < alunos.length; i++){

console.log(alunos[i]);

};*/

/* Função
function media(n1, n2){

    return (n1 + n2) / 2 
}

m = media(5, 5);

console.log(m);*/


/* Objeto 

var aluno = { nome: "Pedro", nota: 10}

console.log(aluno);*/


/*var calcmedia = function (){
    return (this.nota1 + this.nota2) / 2;
} 

var turma = [
        {
            nome: "Pedro",
            nota1: 5,
            nota2: 6,
            media: calcmedia
        }

]
var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());*/

/*function criarAluno (nome, n1, n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function (){
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [

        criarAluno("Pedro", 6, 10),
        criarAluno("julio", 8, 10),
        criarAluno("maria", 4, 10)
]

turma.forEach(function (elemento) {
    
    console.log(elemento);
});*/

/*Mudar cor do elemento ao passar o mouse com onmouseover e onmouseout*/
function onOver(elemento){

    elemento.style.backgroundColor = "red"
}

function onOut(elemento){

    elemento.style.backgroundColor = "rgb(127, 150, 255)"
}





