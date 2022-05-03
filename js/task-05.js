const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

const showText = () => {
    inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.target.value ? event.target.value : 'Anonymous';
    });
};

showText();