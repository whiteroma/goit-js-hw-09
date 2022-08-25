import Notiflix from 'notiflix';
import flatpickr from "flatpickr";


const refs = {
  form: document.querySelector('.form')
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  
let delay = e.currentTarget.delay.valueAsNumber;
const step = e.currentTarget.step.valueAsNumber;
const amount = e.currentTarget.amount.valueAsNumber;


for (let position = 1; position <= amount; position += 1) {
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
delay += step;
}})

