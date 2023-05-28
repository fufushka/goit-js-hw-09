import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayInp: document.querySelector('input[name=delay]'),
  stepInp: document.querySelector('input[name=step]'),
  amountInp: document.querySelector('input[name=amount]'),
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  let delay = Number(refs.delayInp.value);
  const step = Number(refs.stepInp.value);
  const amount = Number(refs.amountInp.value);

  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    console.log(delay);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay} ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay} ms`
        );
      });
    delay += step;
  }
}
