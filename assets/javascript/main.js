$(document).ready(function () {
    console.log(moment());
    // keeps track of the current date (which is taken from moment.js library)
    var currentDate = moment().format("L");
    var currentHour = moment().format("LT");
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



});
