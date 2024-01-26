const clockHours = document.querySelector("span.hours");
const clockMinutes = document.querySelector("span.minutes");
const clockSeconds = document.querySelector("span.seconds");
const clockAmPm = document.querySelector("span.am-pm");

let alarmHours = 0;
let alarmMinutes = 0;
let alarmSeconds = 0;

// Function to check if the current time matches the alarm time
const checkAlarm = (hoursA, minutesA, secondsA) => {
  if (
    alarmHours === hoursA &&
    alarmMinutes === minutesA &&
    alarmSeconds === secondsA
  ) {
    alert(`The time now is ${hoursA}:${minutesA}:${secondsA}`);
  }
};

// Function to update the time display
const updateTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDay();
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const ampm = hours >= 12 ? " PM" : " AM";
  hours = hours % 12 || 12;

  // Update clock display
  document.querySelectorAll(".clock ul li").forEach((element) => {
    element.classList.remove("active");
    if (+element.getAttribute("data") === day) {
      element.classList.add("active");
    }
  });

  // Update clock time
  clockHours.innerText = hours.toString().padStart(2, "0");
  clockMinutes.innerText = minutes.toString().padStart(2, "0");
  clockSeconds.innerText = seconds.toString().padStart(2, "0");
  clockAmPm.innerText = ampm;

  document.querySelectorAll(".clock ul li").forEach((element, index) => {
    if (index === day + 1) {
      element.style.color = "#000";
    } else {
      element.style.color = "";
    }
  });

  // Check if it's time for the alarm
  checkAlarm(hours, minutes, seconds);
};

// Initial time update
// updateTime();

// Update time every second
setInterval(updateTime, 1000);

// Function to get today's name
const getTodayName = () => {
  const now = new Date();
  let day = now.getDay();
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return weekdays[day];
};

// Event listener for set button
const setBtn = document.querySelector(".set");
setBtn.addEventListener("click", () => {
  alarmHours = parseInt(document.querySelector(".hours input").value) || 0;
  alarmMinutes = parseInt(document.querySelector(".minutes input").value) || 0;
  alarmSeconds = parseInt(document.querySelector(".seconds input").value) || 0;

  alert(`Alarm set for: ${alarmHours}:${alarmMinutes}:${alarmSeconds}`);

  document
    .querySelectorAll(".hours input, .minutes input, .seconds input")
    .forEach((input) => (input.value = ""));
});

// Event listener for clear button
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  alarmHours = 0;
  alarmMinutes = 0;
  alarmSeconds = 0;
  alert("Alarm cleared");
});
