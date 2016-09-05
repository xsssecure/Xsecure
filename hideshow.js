//jquery to hide and show the user form
//toggle sets speed
$(document).ready(function(){
    $("#showform").hide();
    $("#display").click(function(){
        $("#showform").toggle(300);
    });
});