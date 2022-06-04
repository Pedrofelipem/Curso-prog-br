
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

