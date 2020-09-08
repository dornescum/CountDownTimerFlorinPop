let startingMinutes =10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdown');
setInterval(updateCountDown, 1000);

function updateCountDown() {
const minutes = Math.floor(time / 60);
const seconds = time % 60;

// seconds = seconds < 10 ? '0' + seconds : seconds;

countDownEl.innerHTML =`${minutes} : ${seconds}`;
  time--;
  time = time < 0 ? 0 : time; 
}
updateCountDown();