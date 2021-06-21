let button = document.querySelector("button");
let arrowHour = document.querySelector("#arrow-hour");
let arrowMinute = document.querySelector("#arrow-minute");
let arrowSecond = document.querySelector("#arrow-second");

let getCurrentDate = new Date();

// getting curent date
let getCurrentHour =
  getCurrentDate.getHours() * 6 +
  getCurrentDate.getMinutes() * 0.1 +
  getCurrentDate.getSeconds() * 0.01666666;

let getCurrentMinute =
  getCurrentDate.getMinutes() * 6 + getCurrentDate.getSeconds() * 0.1;

let getCurrentSecond = getCurrentDate.getSeconds() * 6;

let arrowHourRotate = getCurrentHour;
arrowHour.style.transform = `rotate(${arrowHourRotate}deg)`;

let arrowMinuteRotate = getCurrentMinute;
arrowMinute.style.transform = `rotate(${arrowMinuteRotate}deg)`;

let arrowSecondRotate = getCurrentSecond;
arrowSecond.style.transform = `rotate(${arrowSecondRotate}deg)`;

// start clock
function startClock() {
  setInterval(() => {
    arrowHour.style.transform = `rotate(${arrowHourRotate + 0.1}deg) `;
    arrowHourRotate = arrowHourRotate + 0.01666666;
  }, 1000);

  setInterval(() => {
    arrowMinute.style.transform = `rotate(${arrowMinuteRotate + 0.1}deg) `;
    arrowMinuteRotate = arrowMinuteRotate + 0.1;
  }, 1000);

  setInterval(() => {
    arrowSecond.style.transform = `rotate(${arrowSecondRotate + 6}deg) `;
    arrowSecondRotate = arrowSecondRotate + 6;
  }, 1000);
}

startClock();
