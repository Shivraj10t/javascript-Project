const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const speedInput = document.getElementById('speed');
const p = document.querySelector('p');
startbtn.addEventListener('click', startHandler);
stopbtn.addEventListener('click', stopHandler);
let intervalId = null;
function randomColor() {
  const colorData = '0123456789ABCDEFG';

  let color = '#';
  for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * 16);
    color += colorData[ranNum];
  }
  return color;
}

function startHandler() {
  const delayTime = speedInput.value / 1000;
  if (!intervalId) {
    p.innerHTML = `${delayTime} Sec Delay`;
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, speedInput.value);
  }
}
function stopHandler() {
  clearInterval(intervalId);
  intervalId = null;
  p.innerHTML = `Clicked On Start`;
}

//------------------------
speedInput.addEventListener('input', (e) => {
  const delayTime = speedInput.value / 1000;
  p.innerHTML = `${delayTime} Sec Delay`;
});
