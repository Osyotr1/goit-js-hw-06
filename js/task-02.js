const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')

const element = ingredients.map(el => {
  const newEl = document.createElement('li');
  newEl.textContent = el;
  listEl.appendChild(newEl);
  
})
// const listRef = document.createElement('li')

