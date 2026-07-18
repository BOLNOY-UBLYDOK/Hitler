const music = document.getElementById("song");

const button = document.getElementById("playButton");


button.addEventListener("click", function(){

    if(music.paused){

        music.play();

        button.innerHTML = "🎶 Музыка играет";

    }

    else{

        music.pause();

        button.innerHTML = "🎵 Включить музыку";

    }

});