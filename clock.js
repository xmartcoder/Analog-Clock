var secondpin = document.querySelector('#second');
var minutepin = document.querySelector('#minute');
var hourpin = document.querySelector('#hour');

var date = new Date();
    var second = date.getSeconds();
    var minuteins =date.getMinutes()*60+second;
    var hourins =date.getHours()*60*60+date.getMinutes()*60+second;
    let s=second,m=minuteins,h=hourins;
    const sound = new Audio('clock.mp3');
setInterval(() => {
    sound.play();
    secondpin.style = `transform: translateY(25%) rotate(${s++ * 6 + 180}deg)`;
    minutepin.style = `transform:translateY(50%) rotate(${m++*0.1 + 180}deg)`;
    hourpin.style = `transform:translateY(50%) rotate(${h++*(1/120) + 180}deg)`;
}, 1000);