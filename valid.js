var emailInput=document.getElementById("email-input");
var emailLabel=document.getElementById("email-label");
var emailError=document.getElementById("email-error");
var emailButton1=document.getElementById("button1");

function validEmail()
{
    emailLabel.style.bottom="100px";
    emailLabel.style.left="0px";
    emailLabel.style.borderBottom="2px solid black";

    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailInput.style.borderBottomColor="Red";
        emailError.innerHTML="Please enter a valid email";
        emailError.style.top="75%";
        return false;

    }
    else if(emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML="";
        emailInput.style.borderBottomColor="green";
        emailButton1.style.opacity="100%";
        emailButton1.style.alignItems="center";
        emailButton1.style.fontSize="27px";
    }
}
