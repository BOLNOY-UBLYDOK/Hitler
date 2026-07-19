const music = document.getElementById("music");

const playBtn = document.getElementById("playBtn");

const vinyl = document.getElementById("vinyl");

const needle = document.getElementById("needle");

let isPlaying = false;



// Плеер 🎵

playBtn.addEventListener("click", () => {


if(!isPlaying){


    music.play().then(()=>{


        vinyl.classList.add("playing");

        needle.classList.add("active");

        playBtn.textContent="⏸";

        isPlaying=true;


    }).catch(error=>{

        console.log("Ошибка музыки:", error);

    });



}

else{


    music.pause();


    vinyl.classList.remove("playing");

    needle.classList.remove("active");

    playBtn.textContent="▶️";


    isPlaying=false;


}


});





// Падающие Minecraft сердечки и сакура 🌸💗


const particles = document.querySelector(".particles");



function createParticle(){


const img=document.createElement("img");



if(Math.random()<0.7){


img.src="heart.png";


}

else{


img.src="cherry_flower.png";


}



img.className="particle";



img.style.left =

Math.random()*100+"%";



img.style.width =

(15 + Math.random()*20)+"px";



img.style.height =

img.style.width;



img.style.animationDuration =

(10 + Math.random()*8)+"s";



particles.appendChild(img);




setTimeout(()=>{


img.remove();


},18000);



}



// скорость появления

setInterval(createParticle,900);







// Фото появляются при прокрутке 📸


const cards = document.querySelectorAll(".photo-card");



function showCards(){


const trigger = window.innerHeight * 0.85;



cards.forEach(card=>{


const top = card.getBoundingClientRect().top;



if(top < trigger){


card.classList.add("show");


}



});



}



window.addEventListener("scroll",showCards);



showCards();






// кнопки вперед/назад пока декоративные


const prevBtn=document.getElementById("prevBtn");

const nextBtn=document.getElementById("nextBtn");



prevBtn.addEventListener("click",()=>{


console.log("Предыдущий трек");


});



nextBtn.addEventListener("click",()=>{


console.log("Следующий трек");


});
