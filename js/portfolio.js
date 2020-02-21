// Form validations

//Declare variables
let formContainer = document.getElementById('con-form');
let message = document.createElement('div');
let btn = document.getElementById('con-button');
console.log(btn);


//Set message blank originally
message.innerHTML = '';
message.classList.add('messages');

//Insert message into form container div
formContainer.insertAdjacentElement('afterbegin', message);

//Email Validation
emailValidate = () => {
  let emailInput = document.getElementById('email').value;

  if(emailInput == '') {
    message.innerHTML = "Email field is required!";
    btn.disabled = true;
  }
  else if(!(emailInput.includes('@'))){
    // Conside replacing with email regex
    message.innerHTML = "Please enter a valid email address";
  }
  else {
    btn.disabled = false;
    message.innerHTML = "";
  }
};

nameValidate = () => {
  let nameInput = document.getElementById('fullname').value;
  
  if(nameInput == '') {
    message.innerHTML = "Fullname field is required!";
    btn.disabled = true;
  }
  else {
    btn.disabled = false;
    message.innerHTML = "";
  }
};

textareaValidate = () => {
  let textareaInput = document.getElementById('con-textarea').value;
  
  if(textareaInput == '') {
    message.innerHTML = "You must type a message to be sent!";
    btn.disabled = true;
  }
  else {
    btn.disabled = false;
    message.innerHTML = "";
  }

}
