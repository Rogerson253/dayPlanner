var currentDate = document.getElementById("currentDate");
var timeSlot = document.getElementById("timeSlot");
var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
// var currentTime = moment().format("h a");
var timeOfDay = ["4.00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm"];






$(document).ready(function () {
    $(currentDate).text(function() {
        return "Today's date is " + today + ".";
    });
    
    for (var i = 0; i < timeOfDay.length; i++) {
        var list = $("<li>");
        var input = $("<input>");
        var button = $("<button>");
        
        $(list).text(timeOfDay[i]);
        $(list).css("list-style", "none");
        $(input).attr("type", "text");
        $(button).text("Save");
       
        $(list).append(input, button);
        $("ul").append(list);
    }
    

  

    // Develop if statements that change input field colors based on current time
    // if (currentTime > $("li").text()) {
    //     $("input").css("background-color", "red");
    // }else {
    //     $("input").css("background-color", "blue");
    // }

});






