let video = document.getElementById("videoId");


function avancar() {
    video.currentTime += 10;
}

function pausar() {
    video.pause();
}

function play() {
    video.play();
}

function retroceder() {
    video.currentTime -= 10;
}