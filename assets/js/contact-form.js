/*jshint esversion: 6 */

$(document).ready(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    validateForm(this);
  });
});

/* validateForm provides a custom error message
if the user inputs invalid values.
Code referenced from YouTube tutorial:
Title: Contact Us Form Validation Using Javascript | Form Validation In Javascript
Link: https://www.youtube.com/watch?v=WY4rvU4ImgE */
function validateForm(contactForm) {
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email-address").value;
  let questionsAreaInput = document.getElementById("questions-feedback").value;

  let errorMessage = document.getElementsByClassName("error-message");

  if (nameInput.length < 2) {
    errorMessage[0].style.padding = "5px";
    errorMessage[0].innerHTML = "Please enter your full name";
    return false;
  } else {
    // Clears error message once user input is valid
    errorMessage[0].innerHTML = "";
    errorMessage[0].style.padding = "0px";
  }

  if (emailInput.indexOf("@") === -1) {
    errorMessage[1].style.padding = "5px";
    errorMessage[1].innerHTML = `Please enter a valid email address`;
    return false;
  } else {
    errorMessage[1].style.padding = "0px";
    errorMessage[1].innerHTML = "";
  }

  if (questionsAreaInput.length < 1) {
    errorMessage[2].style.padding = "5px";
    errorMessage[2].innerHTML = `Please enter a question/comment. Don't be shy!`;
    return false;
  } else {
    errorMessage[2].style.padding = "0px";
    errorMessage[2].innerHTML = "";
  }

  // sendEmail invoked once all user input is validated
  return sendEmail(contactForm);
}

/* sendEmail function uses EmailJS service to send the email.
Code referenced from Code Institute's Resume Project 
in Interactive Frontend Development Module */
function sendEmail(contactForm) {
  emailjs
    .send(
      "service_clmquj9",
      "template_pwbxo45",
      {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        question_comment: contactForm.questionsfeedback.value,
      },
      "user_MvNDy76Hsda4DpKEIEPeX"
    )
    .then(
      function (response) {
        console.log("SUCCESS", response);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );

  $("#contact-success-modal").modal("show");
  $(".close-modal-btn").click(() => {
    $("#contact-success-modal").modal("hide");
  });

  return false;
}
