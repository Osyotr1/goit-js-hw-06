const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const userEmail = event.currentTarget.elements.email.value;
    const userPassword = event.currentTarget.elements.password.value;
    const userData = {
        userEmail,
        userPassword,
    }

    if (userEmail === '' || userPassword === '') {
        alert('Заповніть усі поля');
        form.reset();
    } else {
        console.log(userData);
        form.reset();
    }
}