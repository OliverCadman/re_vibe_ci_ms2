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
}
