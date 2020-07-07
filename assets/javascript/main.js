$(document).ready(function () {
    console.log(moment());
    var currentDate = moment().format("L");
    var currentHour = moment().format("LT");
    $("#currentDay").text(currentDate);



    $(".save-button").click(function () {
        console.log(this);
        console.log(value);
        var key = $(this).parent().attr("id");
        var value = $(this).siblings("textarea").val();
        console.log(value);
        localStorage.setItem(key, value);

    })

    var times = ["time-9", "time-10", "time-11", "time-12", "time-13", "time-14", "time-15", "time-16", "time-17"];
    var displayPlanner = function () {
        for (var i = 0; i < times.length; i++) {
            // console.log(times[i]);

            var value = (localStorage.getItem(times[i]));
            $(`#${times[i]} textarea`).val(value);
        }
    }
    displayPlanner();



});
