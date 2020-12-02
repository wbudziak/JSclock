const secInput = document.querySelector("#second");
const minInput = document.querySelector("#minute");
const hourInput = document.querySelector("#hour");
const spans = document.querySelector("span");
const btn = document.querySelector("button");

const seconds = document.querySelector(".sekunda");
const minutes = document.querySelector(".minuta");
const hours = document.querySelector(".godzina");

const audio = new Audio('sound.mp3');
audio.loop = true;

let secRotate = 0;
let minRotate = 0;
let hourRotate = 0;

let secValue = 0;
let minValue = 0;
let hourValue =0;

btn.addEventListener("click",()=>{
    audio.play();

    for(let i = 0; i<secInput.value ; i++){
    secValue++;
    secRotate += 6;
    seconds.style.transform = `rotate(${secRotate}deg)`;
    }
    
    for(let i = 0; i<minInput.value; i++){
        minValue++
        minRotate += 6;
        minutes.style.transform = `rotate(${minRotate}deg)`;
    }
    
    for(let i = 0;i<hourInput.value; i++){
        hourValue++
        hourRotate += 30;
        hours.style.transform = `rotate(${hourRotate}deg)`;
    }
    
    intervalID = setInterval(() => {
        secValue++
        seconds.style.transform = `rotate(${secRotate+=6}deg)`;
        if(secValue % 60 === 0){
            minValue++
            console.log(`${minValue}  minuta`)
            minutes.style.transform =`rotate(${minRotate+=6}deg)`;
        }
        if(minValue === 60){
            minValue =0;
            hourValue++
            hourRotate+=30;
            hours.style.transform = `rotate(${hourRotate}deg)`;
        }
        if(secValue >= 60){
            secValue =0;
        }
        if(minValue >= 60){
            minValue =0;
        }
        spans.textContent =  `${hourValue}:${minValue}:${secValue}`;
    }, 1000);
  
})