
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

/*Filter*/    
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
