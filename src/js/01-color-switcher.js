const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop'),
};
refs.startBtn.addEventListener('click', changeBgColorOnBtnClick);
refs.stopBtn.addEventListener('click', stopBgColor);
let timerId = undefined;

function changeBgColorOnBtnClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  changeBgColor();
  timerId = setInterval(() => {
    changeBgColor();
  }, 1000);
}

function stopBgColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(timerId);
}

// -------------------------------------------------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
