var input = document.getElementById('email');
var pass = document.getElementById('password');
var confirm = document.getElementById('confirmpassword');
var phone = document.getElementById('telephone');
var emailAlert = document.getElementById('emailHelp');
var passAlert = document.getElementById('passHelp');
var confirmAlert = document.getElementById('confpassHelp');
var teleAlert = document.getElementById('teleHelp');
var emaildata=[];
var passdata=[];


input.addEventListener('input', email_validate);
pass.addEventListener('input', pass_validate);
confirm.addEventListener('input', confirm_validate);
phone.addEventListener('input', phone_validate);

input.addEventListener('focus', resete);
pass.addEventListener('focus', resetp);
confirm.addEventListener('focus', resetconfp);
phone.addEventListener('focus', resettele);


function validate() {
    if (email_validate() == true && pass_validate() == true && confirm_validate() == true &&
        phone_validate() == true) {
        return true;
    } else if (email_validate() == false && pass_validate() == false && confirm_validate() == false &&
        phone_validate() == false) {
        input.classList.add('error');
        pass.classList.add('error');
        confirm.classList.add('error');
        phone.classList.add('error');
        return false;
    } else if (email_validate() == false) {
        input.classList.add('error');
        return false;
    } else if (pass_validate() == false) {
        pass.classList.add('error');
        return false;
    } else if (confirm_validate() == false) {
        confirm.classList.add('error');
        return false;
    } else if (phone_validate() == false) {
        phone.classList.add('error');
        return false;
    } else {
        return true;
    }
}

function phone_validate() {
    if (phone.value == '') {
        phone.placeholder = "This field cannot be empty";
        return false;
    } else if (phone.value.length < 10) {
        teleAlert.innerText = "Invalid Phone Number";
        teleAlert.style.color = 'red';
        return false;
    } else if (phone.value.length == 10 && /^\d+$/.test(phone.value)) {
        teleAlert.innerText = "Format is XXX-XXX-XXXX.(space or . also allowed in place of -)";
        teleAlert.style.color = 'red';
        return false;
    } else if (/^[\d]{3}[\.\-\s][\d]{3}[\.\-\s][\d]{4}$/.test(phone.value)) {
        teleAlert.innerText = "Number is valid";
        teleAlert.style.color = "green";
        return true;
    } else {
        teleAlert.innerText = 'Invalid Phone Number';
        teleAlert.style.color = 'red';
        return false;
    }
}
function confirm_validate() {
    if (pass.value == confirm.value && confirm.value.length != 0) {
        confirmAlert.innerText = "perfect Match!";
        confirmAlert.style.color = "green";
        return true;
    } else {
        confirmAlert.innerText = "No match";
        confirmAlert.style.color - "red";
        return false;
    }
}
function pass_validate() {
    if (pass.value == '') {
        pass.placeholder = "This field cannot be empty";
        return false;
    } else if (pass.value.length < 8) {
        passAlert.innerText = "Minimum charaters is 8";
        return false;
    } else if (/^(?=(.*[a-z])+)(?=(.*[A-Z])+)(?=(.*[0-9])+)(?!.*\s).{8,}$/.test(pass.value)) {
        if (pass.value.length == 8) {
            passAlert.innerText = 'Poor Password';
            passAlert.style.color = 'red';
            return false;
        } else if (pass.value.length == 12) {
            passdata.push(pass.value);
            passAlert.innerText = "Medium Password";
            passAlert.style.color = "orange";
            return true;
        } else if (pass.value.length >= 15) {
            passAlert.innerText = "Strong Password";
            passAlert.style.color = 'green';
            return true;
        }
    } else {
        passAlert.innerText = "Must have atleast 1 digit,1 Uppercase and 1 lowerCase letter";
        passAlert.style.color = 'red';
        return false;
    }
}
function email_validate() {
    if (input.value == '') {
        input.placeholder = "This Field cannot be empty";
        return false;
    } else if (/^[\w._]+@[a-zA-Z]+\.[a-zA-Z]{2,3}(\.[a-z]{2,3})?$/.test(input.value)) {
        emaildata.push(input.value);
        emailAlert.innerText = "valid Email";
        emailAlert.style.color = "green";
        return true;
    } else {
        emailAlert.innerText = "Invalid input";
        emailAlert.style.color = "red";
        return false;
    }
}


function resete() {
    document.querySelector('input#email').classList.remove('error');
}
function resetp() {
    document.querySelector('input#password').classList.remove('error');
}
function resetconfp() {
    document.querySelector('input#confirmpassword').classList.remove('error');
}
function resettele() {
    document.querySelector('input#telephone').classList.remove('error');
}



