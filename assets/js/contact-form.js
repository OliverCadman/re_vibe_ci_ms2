$(document).ready(function() {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        validateForm(this);
    })
})

/* validateForm provides a custom error message
if the user inputs invalid values.
Code referenced from YouTube tutorial:
Title: Contact Us Form Validation Using Javascript | Form Validation In Javascript
Link: https://www.youtube.com/watch?v=WY4rvU4ImgE */
function validateForm(contactForm) {

  let nameInput = document.getElementById("name").value
  let emailInput = document.getElementById("email-address").value
  let questionsAreaInput = document.getElementById("questions-feedback").value

  let errorMessage = document.getElementsByClassName('error-message');

  if (nameInput.length < 2 ) {
        errorMessage[0].style.padding = "5px"
        errorMessage[0].innerHTML = "Please enter your full name"
        return false;
  } else {
      // Clears error message once user input is valid
      errorMessage[0].innerHTML = ''
      errorMessage[0].style.padding = "0px";
  };

  if (emailInput.indexOf("@") === -1) {
      errorMessage[1].style.padding = "5px"
      errorMessage[1].innerHTML = `Please enter a valid email address`
      return false;
  } else {
      errorMessage[1].style.padding = "0px";
      errorMessage[1].innerHTML = '';
  };

  if (questionsAreaInput.length < 50) {
      errorMessage[2].style.padding = "5px"
      errorMessage[2].innerHTML = `Please enter more than 50 characters`
      return false;
  } else {
      errorMessage[2].style.padding = "0px";
      errorMessage[2].innerHTML = ''
  };

  // sendEmail invoked once all user input is validated
  return sendEmail(contactForm);
};


