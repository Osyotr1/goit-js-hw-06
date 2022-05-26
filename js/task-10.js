function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesList = document.querySelector('#boxes');



function getInputValue() {
  const input = document.querySelector('input').value;
  createBoxes(input);
};

function createBoxes(amount) {
  const boxes = [];


  for (let i = 1; i <= amount; i += 1) {
    
    const box = document.createElement('div');

      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '10px';
      box.style.width = `${20 + i * 10}px`;
      box.style.height = `${20 + i * 10}px`;
      box.style.border = 'solid 1px black';
      box.style.borderRadius = '5%';
      boxes.push(box);
      
  }
  boxesList.append(...boxes);
}

const removeBoxes = () => {
  boxesList.innerHTML = '';
}

createBtn.addEventListener('click', getInputValue);
destroyBtn.addEventListener('click', removeBoxes);




