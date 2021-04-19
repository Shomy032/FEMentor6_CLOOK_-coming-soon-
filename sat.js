// get all h3 elemnets for placeholders
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2022' ;

function countdown(){

const newYearDate = new Date(newYear);
const currentDate = new Date();
const totalSeconds = (newYearDate - currentDate) / 1000 ;

const days = Math.floor(totalSeconds/3600/24);
const hours = Math.floor(totalSeconds/3600) % 24;
const minutes = Math.floor(totalSeconds/60) % 60 ;
const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = formatTime(days) ; 
hoursEl.innerHTML = formatTime(hours) ; 
minutesEl.innerHTML = formatTime(minutes) ; 
secondsEl.innerHTML = formatTime(seconds) ; 

console.log(totalSeconds , days ,hours , minutes , seconds);
}
function formatTime(time){
if(time < 10){
  return `0${time}` ;
} else{
  return time ;
}
}

setInterval(countdown , 1000)



