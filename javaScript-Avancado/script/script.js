
/* This e Bind */
function speakGeneric(){
    console.log(this.sound)
}

let dog = {
    sound: 'Au Au',
    speak: speakGeneric
}

let cat = {
    sound: 'Miau',
    speak: speakGeneric
}

let bindDog = speakGeneric.bind(dog);
let bindCat = speakGeneric.bind(cat);

bindDog();
bindCat();

Callback
let usuarios = ["Pedro", "Felipe", "Maria"]

function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000)   
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Edvan", listarUsuarios);

/*Promises */
let usuarios = ["Pedro", "Felipe", "Maria"]

function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            let error = false;
            usuarios.push(nome);

            if(!error){
                resolve();
            }else{
                reject({msg:"Erro ao inserir usuário"});
            }
        }, 1000) 
    }) 
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Edvan")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error);
    })

let usuarios = ["Pedro", "Felipe", "Maria"]

function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            let error = false;
            usuarios.push(nome);

            if(!error){
                resolve();
            }else{
                reject({msg:"Erro ao inserir usuário"});
            }
        }, 1000) 
    }) 
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

async function executar(){
   await inserirUsuario("Edvan").catch((error) => {
       console.log(error);
   });
    listarUsuarios();
}

executar();

<<<<<<< HEAD
Filter
=======
/*Filter*/    
>>>>>>> 5430de6e8e0a83e420bec92a170f6b57ac2d2b4a
function novosAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
  novosAluno("Pedro", 22),
  novosAluno("Gabriel", 31),
  novosAluno("Henrique", 29),
  novosAluno("Paula", 45)
]

function menoresde30(aluno){
    return aluno.idade < 30
}

console.log(alunos.filter(menoresde30));
*/

let aluno = {
    nome: "Pedro",
    escola: "Maria da dores",
    matricula: 15546887654,
    telefone: 8445468786
}

let aluno1 = {
    nome: "Maria",
    escola: "Maria da dores",
    matricula: 15546887654,
    telefone: 8445468786
}

let aluno2 = {
    nome: "Felipe",
    escola: "Maria da dores",
    matricula: 15546887654,
    telefone: 8445468786
}

let alunos = [ aluno, aluno1, aluno2];

let aluno3 = alunos.push({nome: "Tiago",
            escola: "Maria da dores",
            matricula: 15546887654,
            telefone: 8445468786
            });

let [...todos] = alunos;

console.log(todos);

