const input = document.querySelector('.input__login');
const button = document.querySelector('.button__login');
const form = document.querySelector('.login-form');

const validateInput = (event) => {
    if(event.target.value.length > 2){
        button.removeAttribute("disabled");
        return;
     }   

    button.setAttribute("disabled", "");
     
}

const saveForm = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);

    window.location = 'assets/pages/game.html'
}


form.addEventListener('submit', saveForm);
input.addEventListener('input', validateInput);