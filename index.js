
const comunicacionFunc = (usernameVal) => {
    window.comunicacion.registroValido(usernameVal)
}

const $ = (selector) => document.querySelector(selector)



const form = $('#myForm')
let errors = {};

const usernameError = $('#usernameError')
const emailError = $('#emailError')
const passwordError = $('#passwordError')
const dateError = $('#dateError')

const fechaActual = new Date();
const fechaMaxima = new Date(fechaActual.getFullYear() - 10, fechaActual.getMonth(), fechaActual.getDate()).toISOString().split('T')[0];
$('#date').setAttribute('max', fechaMaxima);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = $('#username');
    const email = $('#email');
    const password = $('#password');
    const date = $('#date');

    if (!/^[a-zA-Z0-9]+$/.test(username.value)) {
        errors['username'] = true;
        username.classList.add('is-invalid');

    } else errors['username'] = false

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors['email'] = true;
        email.classList.add('is-invalid')
    } else errors['email'] = false

    if (!password.value || password.value.length < 5) {
        errors['password'] = true
        password.classList.add('is-invalid')
    } else errors['password'] = false

    if (!/^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(date.value)) {
        errors['date'] = true
        date.classList.add('is-invalid')
    } else errors['date'] = false

    console.log(errors)
    errors.email ? emailError.classList.remove('ocultar') : emailError.classList.add('ocultar')
    errors.password ? passwordError.classList.remove('ocultar') : passwordError.classList.add('ocultar')
    errors.username ? usernameError.classList.remove('ocultar') : usernameError.classList.add('ocultar')
    errors.date ? dateError.classList.remove('ocultar') : dateError.classList.add('ocultar')

    if (errors.email || errors.username || errors.password || errors.date) {
        console.log('no se puede pasar')
    } else {
        console.log('si se pudo')
        comunicacionFunc(username.value)
    }

});



