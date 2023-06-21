var emailInput=document.getElementById("input");
var emailSub=document.getElementById("button");

function validEmail()
{
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailInput.style.border="2px solid red";
        return false;
    }
    emailInput.style.border="none";
    emailInput.value="You're Successfully subscribed!!";
    emailInput.style.transitionDelay="0.7s";
    emailSub.value="Thank You";
    return true;
}
