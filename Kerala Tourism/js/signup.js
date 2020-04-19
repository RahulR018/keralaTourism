var email = document.getElementById('email');
var pass = document.getElementById('password');
var reafirm = document.getElementById('confirmpassword');
var tele = document.getElementById('telephone');
var emailAlert = document.getElementById('emailHelp');
var passAlert = document.getElementById('passHelp');
var confirmAlert = document.getElementById('confpassHelp');
var teleAlert = document.getElementById('teleHelp');
var regexx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;





function validate() {
    if (email.value == '' || pass.value == '' || reafirm.value == '' || tele.value == '') {
        emailAlert.innerText = 'This field cannot be empty';
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.borderWidth = '2px';
        document.querySelector('input#email').classList.add('error');
        document.querySelector('#email').addEventListener('focus', resete);
        passAlert.innerText = 'This field cannot be empty';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('password').style.borderWidth = '2px';
        document.querySelector('input#password').classList.add('error');
        document.querySelector('#password').addEventListener('focus', resetp);
        confirmAlert.innerText = 'This field cannot be empty';
        document.getElementById('confirmpassword').style.borderColor = 'red';
        document.getElementById('confirmpassword').style.borderWidth = '2px';
        document.querySelector('input#confirmpassword').classList.add('error');
        document.querySelector('#confirmpassword').addEventListener('focus', resetconfp);
        teleAlert.innerText = 'This field cannot be empty';
        document.getElementById('telephone').style.borderColor = 'red';
        document.getElementById('telephone').style.borderWidth = '2px';
        document.querySelector('input#telephone').classList.add('error');
        document.querySelector('#telephone').addEventListener('focus', resettele);
        return false;
    }
    else if (pass.value.length != 0) {
        if (pass.value.search(/\d/) == -1) {
            passAlert.innerText = 'Password need atleast a number';
            return false;
        }
        else if (pass.value.search(/[A-Za-z]/) == -1) {
            passAlert.innerText = 'Password must contain atleast 1 capital letter and a small letter';
            return false;
        }
        else if (pass.value.length < 8) {
            passAlert.innerText = 'password required minimum 8 characters!!';
            passAlert.style.color = 'red';
            return false;
        }
        else if (pass.value.length == 8) {
            passAlert.innerText = 'Weak Password';
            passAlert.style.color = 'red';
            return false;
        }
        else if (pass.value.length <= 15) {
            passAlert.innerText = 'Medium Password';
            passAlert.style.color = 'orange';
        }
        else if (pass.value.length > 15) {
            passAlert.innerText = 'Strong Password';
            passAlert.style.color = 'green';
            return true;
        }
        else if (pass.value != reafirm.value) {
            confirmAlert.innerText = 'Passwords do not match';
            return false;
        }
    }
    else if (tele.value.length > 0) {
        phonenumber(tele);
    }
    else {
        return true;
    }
}



function resete() {
    document.getElementById('email').style.borderColor = '';
    document.getElementById('email').style.borderWidth = '0px';
    document.querySelector('input#email').classList.remove('error');
}
function resetp() {
    document.getElementById('password').style.borderColor = '';
    document.getElementById('password').style.borderWidth = '0px';
    document.querySelector('input#password').classList.remove('error');
}
function resetconfp() {
    document.getElementById('confirmpassword').style.borderColor = '';
    document.getElementById('confirmpassword').style.borderWidth = '0px';
    document.querySelector('input#confirmpassword').classList.remove('error');
}
function resettele() {
    document.getElementById('telephone').style.borderColor = '';
    document.getElementById('telephone').style.borderWidth = '0px';
    document.querySelector('input#telephone').classList.remove('error');
}

function phonenumber(tele) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)){
        return true;
    }
    else {
        alert("message");
        return false;
    }
}


