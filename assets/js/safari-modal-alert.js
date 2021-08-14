/* Displays modal on page load, to alert visitors using iOS Safari
to click speaker icon once to hear the sounds. A temporary workaround to
deal with bug resulting in Safari browsers suspending the Audio Context State. */

/**
 * Session storage code ensures the modal is displayed only upon the 
first visit to page, and will remain closed until the visitor closes their
browser window.

Code referenced from https://stackoverflow.com/questions/59660094/popup-modal-by-browser-session 
 *  */  
$(document).ready(function () {
    if(!sessionStorage.getItem('firstVisit')) {
          $("#safari-alert-modal").modal("show");
    }
    $('.close-modal-btn').on('click', function() {
        $("#safari-alert-modal").modal("hide");
        sessionStorage.setItem('firstVisit', true);
    });
})