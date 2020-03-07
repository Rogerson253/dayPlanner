var currentDate = document.getElementById("currentDate");
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");



$(document).ready(function () {
    $("p").text(function() {
        return "Today's date is " + today + ".";
    });


});

// Create input fields for each hour block.





