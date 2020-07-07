$(document).ready(function(){
    
    var currentDate = moment().format("MMM Do");
    var currentHour = moment().format("h");
    
    //localStorage.getItem(key);

   $(".save-button").click(function(){
       console.log(this);
       console.log(value);
       var key = $(this).parent().attr("id");
        var value = $(this).siblings("textarea").val();
        console.log(value);
        localStorage.setItem(key, value);
       
   })

   var times = ["time-9", "time-10", "time-11"];
   var displayPlanner = function(){
    for(var i=0; i<times.length; i++){
        console.log(times[i]);
        
       var value = (localStorage.getItem(times[i]));
        $(`#${times[i]} textarea`).val(value);
    }
   }
   displayPlanner();
   
  
   
});
