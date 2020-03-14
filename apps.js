var currentDate = document.getElementById("currentDate");
var today = moment().format("dddd, MMMM Do YYYY, h:mm a");


// Prints the current date
$(currentDate).text(function () {
    return "Today's date is " + today + ".";
});

generateDivs();

$("button").on("click", function() {
    console.log(this.id);
    var userInput= $("#input" + this.id).val();
    console.log(userInput);
    localStorage.setItem(this.id, userInput);
})

function generateDivs() {
    for (var i = 6; i < 15; i++) {
        var div = $("<div id=div"+ i + ">");
        var button = $("<button id=" + i + ">Save</button>");
        var input = $("<input id=input" + i + ">");


        $("#calendar").append(div, button, input);
    }
}

// Each of these functions create a time block that allow the user type in the input box and save it when the save button is clicked.
// function sixAm() {
//     var timeOfDay = "6:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("6am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#6am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#6am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("6am", userInput);
//     });
// }
// sixAm()

// function sevenAm() {
//     var timeOfDay = "7:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("7am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#7am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#7am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("7am", userInput);
//     });
// }
// sevenAm()

// function eightAm() {
//     var timeOfDay = "8:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("8am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#8am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#8am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("8am", userInput);
//     });
// }
// eightAm()

// function nineAm() {
//     var timeOfDay = "9:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("9am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#9am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#9am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("9am", userInput);
//     });
// }
// nineAm()

// function tenAm() {
//     var timeOfDay = "10:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("10am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#10am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#10am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("10am", userInput);
//     });
// }
// tenAm()

// function elevenAm() {
//     var timeOfDay = "11:00am";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("11am");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#11am").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#11am").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("11am", userInput);
//     });
// }
// elevenAm()

// function twelvePm() {
//     var timeOfDay = "12:00pm";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("12pm");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#12pm").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#12pm").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("12pm", userInput);
//     });
// }
// twelvePm()

// function onePm() {
//     var timeOfDay = "1:00pm";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("1pm");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#1pm").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#1pm").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("1pm", userInput);
//     });
// }
// onePm()

// function twoPm() {
//     var timeOfDay = "2:00pm";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("2pm");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#2pm").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#2pm").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("2pm", userInput);
//     });
// }
// twoPm()

// function threePm() {
//     var timeOfDay = "3:00pm";
//     var input = $("<input>");
//     var button = $("<button>");
//     var retrieveInput = localStorage.getItem("3pm");
//     console.log(retrieveInput);
//     input.val(retrieveInput);


//     $("#3pm").text(timeOfDay);
//     input.attr("type", "text");
//     input.attr("class", "planInput");
//     button.text("Save");
//     $("#3pm").append(input, button);

//     button.on("click", function (e) {
//         e.preventDefault();
//         var userInput = input.val();
//         // console.log(userInput);
//         localStorage.setItem("3pm", userInput);
//     });
// }
// threePm()