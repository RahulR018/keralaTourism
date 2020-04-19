var email= document.getElementById('email');
var pass=document.getElementById('pass');

function validate(){
    if(email.value==''|| pass.value==''){
        document.getElementById('email').style.borderColor = 'red';
        document.getElementById('email').style.borderWidth = '2px';
        document.querySelector('input#email').classList.add('error');
        document.querySelector('#email').addEventListener('focus', resete);

        document.getElementById('pass').style.borderColor = 'red';
        document.getElementById('pass').style.borderWidth = '2px';
        document.querySelector('input#pass').classList.add('error');
        document.querySelector('#pass').addEventListener('focus', resetp);
        return false;
    }
    else{
        return true;
    }
}

function resete() {
    document.getElementById('email').style.borderColor = '';
    document.getElementById('email').style.borderWidth = '0px';
    document.querySelector('input#email').classList.remove('error');
}
function resetp() {
    document.getElementById('pass').style.borderColor = '';
    document.getElementById('pass').style.borderWidth = '0px';
    document.querySelector('input#pass').classList.remove('error');
}
