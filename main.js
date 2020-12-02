const secInput = document.querySelector("#second");
const minInput = document.querySelector("#minute");
const hourInput = document.querySelector("#hour");
const spans = document.querySelector("span");
const btn = document.querySelector("button");
const btnRealTime = document.querySelector(".realTimeButton");
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
let dayValue =0;

function realTimeClock(){

    let rtClock = new Date();
    let rtHour = rtClock.getHours();
    let rtMinute = rtClock.getMinutes();
    let rtSecond = rtClock.getSeconds();

    let amPm = (hours < 12)? "AM" : "PM";

    rtHour = (rtHour > 12) ? rtHour - 12 : rtHour;
    rtHour = ("0" + rtHour).slice(-2);
    rtMinute = ("0" + rtMinute).slice(-2);
    rtSecond = ("0" + rtSecond).slice(-2);

    spans.innerHTML = `${rtHour}:${rtMinute}:${rtSecond}${amPm}`;
    let t = setTimeout(realTimeClock,500);
    let rotateHour =0;
    let rotateMin = 0;
    let rotateSec = 0;
  

    audio.play();
    
    for(let x = 0; x<rtSecond; x++){
    console.log(rtSecond);
    rotateSec += 6;
    seconds.style.transform = `rotate(${rotateSec}deg)`;
    }
    for(let y = 0; y<rtMinute; y++){
        rotateMin += 6;
        minutes.style.transform = `rotate(${rotateMin}deg)`;
    }
    for(let z = 0; z<rtHour; z++){
        rotateHour += 30;
        hours.style.transform = `rotate(${rotateHour}deg)`;
    }
}
btnRealTime.addEventListener("click",realTimeClock)
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