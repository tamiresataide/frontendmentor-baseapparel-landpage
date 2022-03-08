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