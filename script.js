var submitButton = document.getElementById('submit-btn');
var fullName = document.getElementById('full-name-input');
var phoneNumber = document.getElementById('phone-input');
var emailAddress = document.getElementById('email-input');
var message = document.getElementById('message-input');

function displayNameError() {
    let errorMessage = document.getElementById('name-error');

    if ( fullName.value === ''){
        errorMessage.innerHTML = 'This field is required';
        return false;
    }

    else if (!fullName.value.match(/^[A-Za-z]+(?: [A-Za-z]+)+$/)){
        errorMessage.innerHTML = 'Please enter full name';
        return false;
    }
    else{
        errorMessage.innerHTML = '';
        return true;
    }
}



function displayPhoneError(){
    let errorMessage = document.getElementById('phone-error');

    if (phoneNumber.value === ''){
        errorMessage.innerHTML = 'This field is required';
        return false;
    }

    if (isNaN(phoneNumber.value)){
        errorMessage.innerHTML = 'Please enter a valid phone number';
        return false;
    }

    else if (phoneNumber.value.length !== 11){
        errorMessage.innerHTML = 'The phone number must be 11 digits';
        return false;
    }

    else{
        errorMessage.innerHTML = '';
        return true;
    }
}



function displayEmailError(){
    let errorMessage = document.getElementById('email-error');

    if (emailAddress.value === ''){
        errorMessage.innerHTML = 'This field is required';
        return false;
    }

    else if (!emailAddress.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        errorMessage.innerHTML = 'please enter a valid email Address';
        return false;
    }

    else{
        errorMessage.innerHTML = '';
        return true;
    }
}



function displayMessageError(){

    var errorMessage = document.getElementById('message-error');

    if (message.value === ''){
        errorMessage.innerHTML = 'This field is required';
        return false;
    }

    else{
        let messageText = message.value;
        let limit = 30;
        let left = limit - messageText.length;

        if (left > 0){
            errorMessage.innerHTML = left + ' more characters required';
            return false;
        }

        else{
            errorMessage.innerHTML = '';
            return true;
        }

    }


}


submitButton.addEventListener('click', function(event){
    if (!displayNameError() || !displayPhoneError() || !displayEmailError() || !displayMessageError()){
        document.getElementById('form-error').innerHTML = 'Please fix the errors before submitssion';
        event.preventDefault();
        setTimeout(() => {
            document.getElementById('form-error').innerHTML = '';
        }, 5000)
    }

})
