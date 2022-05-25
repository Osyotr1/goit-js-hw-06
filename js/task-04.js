const counterValue = document.querySelector('#value');

counterValue.innerHTML = 0;

const increaseBtn = document.querySelector('button[data-action="increment"]');
const decreaseBtn = document.querySelector('button[data-action="decrement"]');

increaseBtn.addEventListener('click', () => {
    counterValue.innerHTML = +counterValue.innerHTML + 1;
});

decreaseBtn.addEventListener('click', () => {
    counterValue.innerHTML = counterValue.innerHTML - 1;
});