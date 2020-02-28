// Form validations

//Declare variables
let formContainer = document.getElementById('con-form');
let message = document.createElement('div');
let btn = document.getElementById('con-button');
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
console.log(btn);


//Set message blank originally
message.innerHTML = '';
message.classList.add('messages');

//Insert message into form container div
formContainer.insertAdjacentElement('afterbegin', message);

//Disable button by default
btn.disabled = true;

//Email Validation
let emailValidate = () => {
  let emailInput = document.getElementById('email').value;

  if(emailInput == '') {
    message.innerHTML = "Email field is required!";
    //btn.disabled = true;
    console.log("email: false");
    return false;
  }
  else if(emailRegex.test(emailInput)){//email regex
    console.log("matched!");
    message.innerHTML = "";
    //btn.disabled = false;
    console.log("email: true");    
    return true;
  }
  else {
    //btn.disabled = true;
    message.innerHTML = "Please enter a valid email address";
    console.log("email:false");
    return false;
  }
};

let nameValidate = () => {
  let nameInput = document.getElementById('fullname').value;
  
  if(nameInput == '') {
    message.innerHTML = "Fullname field is required!";
    console.log("name: false");
    //btn.disabled = true;
    return false;
  }
  else {
    //btn.disabled = false;
    console.log("name: true");
    message.innerHTML = "";
    return true;
  }
};

let textareaValidate = () => {
  let textareaInput = document.getElementById('con-textarea').value;
  
  if(textareaInput == '') {
    message.innerHTML = "You must type a message to be sent!";
    console.log("textarea: false");
    return false;
    //btn.disabled = true;
  }
  else {
    //btn.disabled = false;
    message.innerHTML = "";
    console.log("textarea: true");
    return true;
  }

};

console.log(emailValidate());
console.log(nameValidate());
console.log(textareaValidate());

//Enable button only when all validations pass
let validate = () => {
  if((emailValidate() && nameValidate() && textareaValidate())===true){
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
};

  

//Set widths of table percentage fields
let percentage = document.getElementsByClassName('percent');
console.log(percentage);
