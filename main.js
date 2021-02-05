const secInput = document.querySelector("#second");
const minInput = document.querySelector("#minute");
const hourInput = document.querySelector("#hour");
const digital = document.querySelector(".digital");
const numbers = document.querySelectorAll("span");
const btn = document.querySelector("button");
const btnRealTime = document.querySelector(".realTimeButton");
const secondHand = document.querySelector(".sekunda");
const minutesHand = document.querySelector(".minuta");
const hourHand = document.querySelector(".godzina");
const reload = document.querySelector(".reload");

actualTime = function(){
    let time = new Date();
    let actualHours = time.getHours();
    let actualMinutes = time.getMinutes();
    let actualSeconds= time.getSeconds();
    let rotateHour = 0;
    let rotateMin = 0;
    let rotateSec = 0;

    for(let i =0; i<actualSeconds; i++){
        rotateSec+=6;
        secondHand.style.transform = `rotate(${rotateSec}deg)`;
    }
    for(let i =0; i<actualHours; i++){
        rotateHour+=30;
        hourHand.style.transform = `rotate(${rotateHour}deg)`;
    }
    for(let i =0; i<actualMinutes; i++){
        rotateMin+=6;
        minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    }

// wskazówka sekundy

    const secInterval = setInterval(() => {
    rotateSec+=6;
    secondHand.style.transform = `rotate(${rotateSec+6}deg)`;
    // Dodałem +6, poniewaz jezeli dam animacje 1s to sekundnik sie spoznia
    }, 1000);

// wskazówka minuty

   let timeLeftToFullMinute = 60000 - (actualSeconds * 1000);
   setTimeout(() => {
    rotateMin+=6;
    minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    setInterval(() => {
    rotateMin+=6;
    minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    }, 60000);
   }, timeLeftToFullMinute);

//    wskasówka godziny

   let convertToMilSec = (actualSeconds*1000) + (actualMinutes * 60000);
   let timeLeftToFullHour = 3600000 - convertToMilSec;
   setTimeout(() => {
    rotateHour+=30;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    setInterval(() => {
    rotateHour+=30;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    }, 3600000);
   }, timeLeftToFullHour);
}
btnRealTime.addEventListener('click', actualTime)

digitalClock = function(){
    digitalActualTime = function(){ 
       setInterval(() => {
        let time = new Date();
        let actualHours = time.getHours();
        let actualMinutes = time.getMinutes();
        let actualSeconds= time.getSeconds();
        console.log(actualHours,actualMinutes,actualSeconds);
        digital.innerHTML = `${actualHours < 10 ? `0${actualHours}`: actualHours }:${actualMinutes < 10 ? `0${actualMinutes}`: actualMinutes }:<span style = "font-size:15px; color:red;">${actualSeconds < 10 ? `0${actualSeconds}`: actualSeconds }`;
       }, 1000);
    }
    btnRealTime.addEventListener('click', digitalActualTime)
}
digitalClock();