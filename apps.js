var currentDate = document.getElementById("currentDate");
var today = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentTime = moment().format("h a");
var timeOfDay = ["4.00am", "5:00am", "6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm"];
var plans = [];
var storedPlans = JSON.parse(localStorage.getItem("inputValue"));




$(document).ready(function () {
    $(currentDate).text(function() {
        return "Today's date is " + today + ".";
    });
    


    function timeBlocks() {
    let blocks = "";
    for (let i = 0; i < timeOfDay.length; i++) {
        var hourBlocks = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + timeOfDay[i] + '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="' + timeOfDay[i] + '">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary" data-time="' + timeOfDay[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlocks;
        var inputGroup = (".input-group");
        // inputGroup = (".form-control").value;
        // plans.push(inputGroup);
        // console.log(".form-control");

        // var input = document.querySelector(".form-control");
        // plans.push(input);
    }
    $("#timeSlots").append(blocks);
}
timeBlocks();




// var input = document.querySelector(".form-control");
// var inputGroup = document.querySelector(".input-group");


// console.log(input);

function storePlans() {
    localStorage.setItem("inputvalue", JSON.stringify(plans));
  }
      
  
  $("button").on("click", function(e) {
           e.preventDefault();
        //    plans.push(inputGroup);
          storePlans();
    });
        
    

    
 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    // for (var i = 0; i < timeOfDay.length; i++) {
    //     var list = $("<li>");
    //     var input = $("<input>");
    //     var button = $("<button>");
        
    //     $(list).text(timeOfDay[i]);
    //     $(list).css("list-style", "none");
    //     $(input).attr("type", "text");
    //     $(input).attr("class", "planInput");
    //     $(button).text("Save");

       
    //     $(list).append(input, button);
    //     $("ul").append(list);

    //     $("button").on("click", function() {
    //         localStorage.setItem("inputvalue", $(".planInput").val());
    //         $(".planInput").text(localStorage.getItem("inputvalue"));
    //         savePlans();
    //     });


    // }
    
    // function savePlans() {
    //     var planInput = localStorage.getItem("inputValue"), 
    //         plans = [];
    //     if (!planInput) { planInput = ''; }  // initialize if null
      
      
    //     plans.push(document.getElementById("inputValue").value);
    //     planInput = plans.join(',');
    //     localStorage.setItem("inputValue", planInput);
    //     showPlans();
    //   }
  
    //   function showPlans() {
    //     var planText = localStorage.getItem("inputValue");
    //   }  
      
    // Develop if statements that change input field colors based on current time
    // Create a function that stores user input on click
    
    // $(document).ready(function(){
    //     if(localStorage.getItem("inputvalue")){
    //       $(".planInput").text(localStorage.getItem("inputvalue"));
    //     }
        
    //     $("button").on("click", function() {
    //     localStorage.setItem("inputvalue", $(".planInput").val());
    //     $(".planInput").text(localStorage.getItem("inputvalue"));
    // });
        
    // });
});






