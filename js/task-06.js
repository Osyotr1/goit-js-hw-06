const inputEl = document.querySelector('#validation-input');

const defaultLength = inputEl.dataset.length;
console.log(defaultLength);

inputEl.addEventListener('blur', colorChange);

function colorChange(value) {
    if (Number(inputEl.value.length) === Number(defaultLength)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }

}
