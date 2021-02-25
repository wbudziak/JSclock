const digital = document.querySelector(".digital-hour-min");
const digitalSeconds = document.querySelector(".digital-seconds");
const secondHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
clock = function () {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let rotateHour = (hours * 30) + (minutes/2) + (seconds/120);
    let rotateMin = (minutes * 6) + (seconds/10);
    let rotateSec = seconds * 6;
    secondHand.style.transform = `rotate(${rotateSec}deg)`;
    minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    hourHand.style.transform = `rotate(${rotateHour}deg)`;
    setInterval(() => {
        rotateSec +=6;
        rotateMin += .1;
        rotateHour += 1/120;
        secondHand.style.transform = `rotate(${rotateSec}deg)`;
        minutesHand.style.transform = `rotate(${rotateMin}deg)`;
        hourHand.style.transform = `rotate(${rotateHour}deg)`;
        }, 1000);
}
clock()

const digitalClock = () => {
    let time = new Date();
    let actualHours = time.getHours();
    let actualMinutes = time.getMinutes();
    let actualSeconds = time.getSeconds();
    digital.textContent = `${actualHours < 10 ? `0${actualHours}`: actualHours }:${actualMinutes < 10 ? `0${actualMinutes}`: actualMinutes }:`;
    digitalSeconds.textContent = `${actualSeconds < 10 ? `0${actualSeconds}`: actualSeconds }`;
}
digitalClock();
setInterval(digitalClock,1000);