$(document).ready(function () {
    console.log(moment());
    // keeps track of the current date (which is taken from moment.js library)
    var currentDate = moment().format("L");

    // used jquery selector to display the current date, which is the value of the currentDate variable
    $("#currentDay").text(currentDate);



    $(".save-button").click(function () {
        console.log(this);
        console.log(value);
        // moving through the DOM to let var key hold the value of the id attribute
        var key = $(this).parent().attr("id");
        // keeps track of the textarea value
        var value = $(this).siblings("textarea").val();
        console.log(value);
        // local storage needs a key value pair, this allows for the key (id) to be paired with the value (textarea)
        localStorage.setItem(key, value);

    })
    // keeps track of the different time ids
    var times = ["time-9", "time-10", "time-11", "time-12", "time-13", "time-14", "time-15", "time-16", "time-17"];
    // keeps track of the function that will allow for locally stored text to appear and stay on the webpage
    var displayPlanner = function () {
        // if there is an array, will need a forward loop
        for (var i = 0; i < times.length; i++) {
            // console.log(times[i]);
            // keeps track of locally stored item that is paired with times
            var value = (localStorage.getItem(times[i]));
            // allows for locally stored items to be displayed into webpage and stay there 
            $(`#${times[i]} textarea`).val(value);
        }
    }
    // calls the function
    displayPlanner();

    var background = function () {
        var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];

        var currentHour = moment().format("H");


        console.log(currentHour);
        var backgroundColor = $(".col-8");

        //tracker is set to 9 so if user is no 9-5 it will default to past
        var tracker = 9;
        //converts array index into a int that is readable for cuurentHour
        if (currentHour == 9) {
            tracker = 0;
        }
        if (currentHour == 10) {
            tracker = 1;
        }
        if (currentHour == 11) {
            tracker = 2;
        }
        if (currentHour == 12) {
            tracker = 3;
        }
        if (currentHour == 13) {
            tracker = 4;
        }
        if (currentHour == 14) {
            tracker = 5;
        }
        if (currentHour == 15) {
            tracker = 6;
        }
        if (currentHour == 16) {
            tracker = 7;
        }
        if (currentHour == 17) {
            tracker = 8;
        }
        console.log(tracker);
        //makes the html ID reachable when comparing times
        var hour9 = $("#hour-9");
        var hour10 = $("#hour-10");
        var hour11 = $("#hour-11");
        var hour12 = $("#hour-12");
        var hour13 = $("#hour-13");
        var hour14 = $("#hour-14");
        var hour15 = $("#hour-15");
        var hour16 = $("#hour-16");
        var hour17 = $("#hour-17");



        for (var i = 0; i < hours.length; i++) {
            console.log(i);
            //checks and changes to correct color all past hours
            if (tracker > i) {
                if (tracker > 0) {
                    hour9.addClass("past");
                }
                if (tracker > 1) {
                    hour10.addClass("past");
                }
                if (tracker > 2) {
                    hour11.addClass("past");
                }
                if (tracker > 3) {
                    hour12.addClass("past");
                }
                if (tracker > 4) {
                    hour13.addClass("past");
                }
                if (tracker > 5) {
                    hour14.addClass("past");
                }
                if (tracker > 6) {
                    hour15.addClass("past");
                }
                if (tracker > 7) {
                    hour16.addClass("past");
                }
                if (tracker > 8) {
                    hour17.addClass("past");
                }
            }

            //checks and changes to correct color all future hours  
            if (tracker < i) {
                if (tracker < 0) {
                    hour9.addClass("future");
                }
                if (tracker < 1) {
                    hour10.addClass("future");
                }
                if (tracker < 2) {
                    hour11.addClass("future");
                }
                if (tracker < 3) {
                    hour12.addClass("future");
                }
                if (tracker < 4) {
                    hour13.addClass("future");
                }
                if (tracker < 5) {
                    hour14.addClass("future");
                }
                if (tracker < 6) {
                    hour15.addClass("future");
                }
                if (tracker < 7) {
                    hour16.addClass("future");
                }
                if (tracker < 8) {
                    hour17.addClass("future");
                }

            }
            //checks and changes to correct color all present hours   
            if (tracker == i) {
                if (tracker == 0) {
                    hour9.addClass("present");
                }
                if (tracker == 1) {
                    hour10.addClass("present");
                }
                if (tracker == 2) {
                    hour11.addClass("present");
                }
                if (tracker == 3) {
                    hour12.addClass("present");
                }
                if (tracker == 4) {
                    hour13.addClass("present");
                }
                if (tracker == 5) {
                    hour14.addClass("present");
                }
                if (tracker == 6) {
                    hour15.addClass("present");
                }
                if (tracker == 7) {
                    hour16.addClass("present");
                }
                if (tracker == 8) {
                    hour17.addClass("present");
                }
            }


        }



    }
    background();


});
