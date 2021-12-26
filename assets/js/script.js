$(document).ready(function () {
    //use day.js
    // the current day and time is displayed at the top of the calendar...
    $("#currentDay").text(dayjs().format("ddd, MMM D, YYYY h:mm A")); 

    //on click event execute save to local storage
    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var value = $(this).siblings(".task").val(); 
        var time = $(this).parent().attr("id"); 

        
        localStorage.setItem(time, value);
    })

    //load any saved data from LocalStorage 
    $("#hour9 .task").val(localStorage.getItem("hour9"));
    $("#hour10 .task").val(localStorage.getItem("hour10"));
    $("#hour11 .task").val(localStorage.getItem("hour11"));
    $("#hour12 .task").val(localStorage.getItem("hour12"));
    $("#hour13 .task").val(localStorage.getItem("hour13"));
    $("#hour14 .task").val(localStorage.getItem("hour14"));
    $("#hour15 .task").val(localStorage.getItem("hour15"));
    $("#hour16 .task").val(localStorage.getItem("hour16"));
    $("#hour17 .task").val(localStorage.getItem("hour17"));
    
    function timeTracker() {
        //get current hours
        //use day.js
         var currentHour = dayjs().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time add the style
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    timeTracker(); 
})

