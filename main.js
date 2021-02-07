const digital = document.querySelector(".digital");
const secondHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
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

//    wskazówka godziny

   let convertToMilSec = (actualSeconds*1000) + (actualMinutes * 60000);
   let timeLeftToFullHour = 3600000 - convertToMilSec;
   setTimeout(() => {
    rotateHour+=30;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    setInterval(() => {
    rotateHour+=3;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    }, 150000);
   }, timeLeftToFullHour);
}
actualTime()
digitalClock = function(){
    digitalActualTime = function(){ 
        const startDigital = ()=>{
            let time = new Date();
            let actualHours = time.getHours();
            let actualMinutes = time.getMinutes();
            let actualSeconds= time.getSeconds();
            digital.innerHTML = `${actualHours < 10 ? `0${actualHours}`: actualHours }:${actualMinutes < 10 ? `0${actualMinutes}`: actualMinutes }:<span style = "font-size:15px; color:red;">${actualSeconds < 10 ? `0${actualSeconds}`: actualSeconds }`;
        }
        startDigital();
       setInterval(() => {
        startDigital();
       }, 1000);
    }
    digitalActualTime();
}
digitalClock();


