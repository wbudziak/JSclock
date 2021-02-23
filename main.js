const digital = document.querySelector(".digital-hour-min");
const digitalSeconds = document.querySelector(".digital-seconds");
const secondHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");
actualTime = function () {
    let time = new Date();
    let actualHours = time.getHours();
    let actualMinutes = time.getMinutes();
    let actualSeconds = time.getSeconds();
    let rotateHour = 0;
    let rotateMin = 0;
    let rotateSec = 0;

    for (let i = 0; i < actualSeconds; i++) {
        rotateSec += 6;
        secondHand.style.transform = `rotate(${rotateSec}deg)`;
    }
    for (let i = 0; i < actualHours; i++) {
        rotateHour += 30;
        hourHand.style.transform = `rotate(${rotateHour}deg)`;
    }
    for (let i = 0; i < actualMinutes; i++) {
        rotateMin += 6;
        minutesHand.style.transform = `rotate(${rotateMin}deg)`;
    }

    // second hand

    const secInterval = setInterval(() => {
        rotateSec += 6;
        secondHand.style.transform = `rotate(${rotateSec}deg)`;
    }, 1000);

    // minute hand

    let timeLeftToFullMinute = 60000 - (actualSeconds * 1000);
    setTimeout(() => {
        rotateMin += 6;
        minutesHand.style.transform = `rotate(${rotateMin}deg)`;
        setInterval(() => {
            rotateMin += 6;
            minutesHand.style.transform = `rotate(${rotateMin}deg)`;
        }, 60000);
    }, timeLeftToFullMinute);

    // hour hand

    let convertToMilSec = (actualSeconds * 1000) + (actualMinutes * 60000);
    let timeLeftToFullHour = 3600000 - convertToMilSec;
    setTimeout(() => {
        rotateHour += 30;
        hourHand.style.transform = `rotate(${rotateHour}deg)`;
        setInterval(() => {
            rotateHour += 30;
            hourHand.style.transform = `rotate(${rotateHour}deg)`;
        }, 3600000);
    }, timeLeftToFullHour);
}
actualTime()

const digitalTime = () => {
    let time = new Date();
    let actualHours = time.getHours();
    let actualMinutes = time.getMinutes();
    let actualSeconds = time.getSeconds();
    digital.textContent = `${actualHours < 10 ? `0${actualHours}`: actualHours }:${actualMinutes < 10 ? `0${actualMinutes}`: actualMinutes }:`;
    digitalSeconds.textContent = `${actualSeconds < 10 ? `0${actualSeconds}`: actualSeconds }`;
    setInterval(() => {
        digitalTime();
    }, 1000);
}
digitalTime();