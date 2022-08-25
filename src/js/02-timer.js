import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
    input: document.querySelector('input#datetime-picker'),
    timerHtml: document.querySelector('.timer'),
    btnStart: document.querySelector('button[data-start]'),
    seconds: document.querySelector('span[data-seconds]'),
    minutes: document.querySelector('span[data-minutes]'),
    hours: document.querySelector('span[data-hours]'),
    days: document.querySelector('span[data-days]'),
};

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  refs.btnStart.disabled = true;

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        refs.btnStart.disabled = true;
      } else {
        refs.btnStart.disabled = false;
      }
    },
  };

  const fp = flatpickr(refs.input, options);

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

  
refs.btnStart.addEventListener('click', () => {
  refs.timerHtml.style.color = 'blue';
  refs.btnStart.disabled = true;
  refs.input.disabled = true;
  let timer = setInterval(() => {
    let countdown = new Date(refs.input.value) - new Date();
    if(refs.btnStart.disabled && refs.input.disabled) {
      refs.input.style.cursor = 'not-allowed',
      refs.btnStart.style.cursor = 'not-allowed'
    }
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      refs.days.inputContent = addLeadingZero(timeObject.days);
      refs.hours.inputContent = addLeadingZero(timeObject.hours);
      refs.minutes.inputContent = addLeadingZero(timeObject.minutes);
      refs.seconds.inputContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 10000) {
        refs.timerHtml.style.color = 'tomato';
      }
    } else {
      Notiflix.Notify.success('Countdown finished');
      refs.timerHtml.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});
