const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
});

function checkInput() {
   const emailValue = email.value.trim();

   if(emailValue === ""){
       //show error
       // add error class
       setErrorFor(email);
   } else if (!isEmail(emailValue)){
        setErrorFor(email);
   } else { 
       setSucessFor(email);
   }
}

function setErrorFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control fail';
}

function setSucessFor(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}