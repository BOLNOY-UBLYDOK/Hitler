const falling =
document.querySelector(".falling");



const symbols = [

"🩷",
"🎀",
"🍓",
"✨",
"🌸",
"🇷🇺"

];



for(let i=0;i<35;i++){


let item =
document.createElement("div");


item.className="item";


item.innerHTML =
symbols[Math.floor(Math.random()*symbols.length)];



item.style.left =
Math.random()*100+"%";



item.style.animationDuration =
(5+Math.random()*8)+"s";



item.style.animationDelay =
Math.random()*5+"s";



falling.appendChild(item);


}





const giftButton =
document.getElementById("giftButton");


const start =
document.querySelector(".start");


const gift =
document.querySelector(".gift");





giftButton.onclick=()=>{


start.style.opacity="0";


setTimeout(()=>{


start.style.display="none";


gift.classList.remove("hidden");


createBurst();



},700);



}




function createBurst(){


const present =
document.querySelector(".present");



const things=[

"🩷",
"🎀",
"🍓",
"✨",
"🌸",
"🤍"

];



for(let i=0;i<18;i++){



let item =
document.createElement("div");


item.className="burst";


item.innerHTML =
things[Math.floor(Math.random()*things.length)];



item.style.left="75px";

item.style.top="40px";



item.style.setProperty(

"--x",

(Math.random()*300-150)+"px"

);



item.style.setProperty(

"--y",

(Math.random()*-250-50)+"px"

);



present.appendChild(item);



setTimeout(()=>{

item.remove();

},2000);



}


}