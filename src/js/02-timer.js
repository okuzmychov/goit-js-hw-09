import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      window.alert("Please choose a date in the future");
    } else {
      this._input.disabled = true;
      startTimer(selectedDate);
    }
  },
});

const startButton = document.querySelector("[data-start]");

function startTimer(endDate) {
  const startButton = document.querySelector("[data-start]");
  startButton.disabled = true;

  const timerFields = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
  };

  const updateTimer = () => {
    const remainingTime = endDate - new Date();

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerFields.days.textContent = "00";
      timerFields.hours.textContent = "00";
      timerFields.minutes.textContent = "00";
      timerFields.seconds.textContent = "00";
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    timerFields.days.textContent = addLeadingZero(days);
    timerFields.hours.textContent = addLeadingZero(hours);
    timerFields.minutes.textContent = addLeadingZero(minutes);
    timerFields.seconds.textContent = addLeadingZero(seconds);
  };

  let timerInterval = setInterval(updateTimer, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}