const buttons = document.getElementsByClassName('button');
const body = document.body;
for (i of buttons) {
  i.addEventListener('click', changeColor);
}

function changeColor(e) {
  const color = e.target.id;
  body.style.backgroundColor = color;
}
