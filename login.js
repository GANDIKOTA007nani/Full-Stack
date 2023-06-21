var emailInput=document.getElementById('email');
var password=document.getElementById('password');
var login=document.getElementById('login');
var forgot=document.getElementById('forgot');
function valid()
{
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailInput.style.border="3px solid red";
        password.style.opacity="0%";
        forgot.style.opacity="0%";
        return false;
    }
    else
    {
        emailInput.style.border="3px solid green";
        password.style.opacity="100%";
        password.style.width="200px";
        password.style.height="30px";
        forgot.style.opacity="100%";
        return true;
    }
}
function valid1()
{
    if(password.value.length < 8 || password.value.length > 20)
    {
        password.style.border="3px solid red";
        login.style.opacity="0%";
        return false;
    }
    else
    {
        password.style.border="3px solid green";
        login.style.opacity="100%";
        login.style.width="80px";
        login.style.height="30px";
        login.style.marginTop="30px";
        return true;
    }
}