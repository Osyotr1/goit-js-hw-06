function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('.widget');

const colorChangeBtn = document.querySelector('button.change-color');

const colorSpan = document.querySelector('.color');

colorChangeBtn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
}
