// This ensures that the HTML elements have loaded before we execute out code
window.onload = function() {
    console.log("The page has loaded!");

    // We check if the forms exist on the current page.
    // Not the nicest way of doing it, but this way we can reuse the same JS file

    var susbcribeForm = document.getElementById("subscribe-form");
    if (susbcribeForm != null){
        console.log("Waiting for subscriptions...");
        susbcribeForm.addEventListener('submit', processSubscriptionDetails);
    }

    var messageForm = document.getElementById("message-form");
    if (messageForm != null){
        console.log("Waiting for message...");
        messageForm.addEventListener('submit', processMessage);
    }
};

function processSubscriptionDetails(event) {
 
    // By default the page refreshes on form submissions. The following prevents that.
    event.preventDefault();

    // Get the inputs of the form  
    var name = document.getElementById("nameTextBox");
    var emailAddress = document.getElementById("addressTextBox");
  
    // Log the current text box values with some sanity check
    if (name == null || emailAddress == null)
    {
        console.warn("We couldn't find one of your form inputs. Check their IDs!");
        return;
    }
    else 
    {
        console.log("Name : " + name.value + ". Address : "  + emailAddress.value);
    }
    
    // Validate email address, if valid alert with values. If invalid alert with invalid email address.
    if(validEmail(emailAddress.value)){
         alert("Name : " + name.value + ". Address : "  + emailAddress.value + " Submitted.");  
         // Clear text boxes for next use.
        name.value = '';
        emailAddress.value = '';
    } 
    else 
    {
        alert("Invalid e-mail address.");
    }
}
  
function validEmail(emailAddress){
    return String(emailAddress)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function processMessage(event){
    // By default the page refreshes on form submissions. The following prevents that.
    event.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");

    if (!validEmail(email.value)){
        alert(`Your email address doesn't look valid: ${email.value}`);
    }else{
        alert(`Thank you for getting in touch, ${name.value}!`);
    }
}