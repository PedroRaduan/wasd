musica = '';

function preload(){
    musica = loadSound('music.mp3');

}

function tocar(){
    musica.play();
    musica.setVolume(1);
    musica.rate(1);
}