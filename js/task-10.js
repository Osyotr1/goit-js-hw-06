function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesList = document.querySelector('#boxes');

const inputValue = () => Number(input.value);



const createBoxes = () => {
  
  const boxes = [];
  let amount = inputValue();

  for (let i = 1; i <= amount; i++) {
    

    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '20px';
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.border = 'solid 1px black';
    box.style.borderRadius = '5%';
    boxes.push(box);
    
    
  }
  boxesList.append(...boxes);
}

const removeBoxes = () => {
  boxesList.innerHTML = '';
}


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', removeBoxes);






