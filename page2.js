const music = document.getElementById("song");

const button = document.getElementById("playButton");



button.addEventListener("click",()=>{


if(music.paused){

music.play();

button.innerHTML="🎶 music is playing";

}

else{

music.pause();

button.innerHTML="🎵 Play song";

}


});





const photos = document.querySelectorAll(".polaroid");



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}


});


},{

threshold:0.2

});




photos.forEach(photo=>{

observer.observe(photo);

});