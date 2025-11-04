// Countdown Timer Logic

const startBtn = document.getElementById("startBtn")
const targetInput = document.getElementById("targetDate")

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdownInterval;

startBtn.addEventListener("click", () =>{
    const targetDate = new Date(targetInput.value).getTime();

    if (!targetDate) {
        alert("Please select valid date and time!")
    }

    // Clear previous countdown if any
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        const now = new Date(). getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
  clearInterval(countdownInterval);
  daysEl.textContent = "00";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";

  // Show cinematic ending
  const endScreen = document.getElementById("endScreen");
  endScreen.classList.add("show");

  const audio = new Audio("alarm.mp3");
  audio.play();

  return;
}

        const days = Math.floor(timeLeft / (1000*60*60*24));
        const hours = Math.floor((timeLeft % (1000*60*60*24)) / (1000*60*60));
        const minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
        const seconds = Math.floor((timeLeft % (1000*60)) / 1000);

        daysEl.textContent = days < 10 ? "0" + days : days;
        hoursEl.textContent = hours < 10 ? "0" + hours : hours;
        minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
});


// === Fullscreen toggle ===
const fullscreenBtn = document.getElementById("fullscreenBtn");

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.textContent = "❎ Exit";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreenBtn.textContent = "⛶ Fullscreen";
    }
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered successfully'))
    .catch((error) => console.log('Service Worker registration failed:', error));
}
