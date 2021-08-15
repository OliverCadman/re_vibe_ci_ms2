$(document).ready(function() {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        validateForm(this);
    })
})


