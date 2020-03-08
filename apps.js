var currentDate = document.getElementById("currentDate");
var today = moment().format("dddd, MMMM Do YYYY, h:mm a");



$(document).ready(function () {
    $(currentDate).text(function() {
        return "Today's date is " + today + ".";
    });

    $("li").append("<input>");
    $("li").append("<button>");
    $("li").css("list-style", "none");

});

// Create input fields for each hour block.





