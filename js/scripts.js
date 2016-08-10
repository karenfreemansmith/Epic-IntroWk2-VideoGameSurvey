$(document).ready(function() {


  $("input:radio[name=days]").click(function () {
    if($("input:radio[name=days]:checked").val() === "days") {
      $(".frequency").text("day");
    } else if($("input:radio[name=days]:checked").val() === "weeks") {
      $(".frequency").text("week");
    } else if($("input:radio[name=days]:checked").val() === "months") {
      $(".frequency").text("month");
    }
  });

  $(".panel1 form").submit(function(event) {
    $(".game").text($("input#name").val());
    event.preventDefault();
  });

  $(".panel2 form").submit(function(event) {
    var playTime = parseInt($("input#long").val());

    if($("input:radio[name=days]:checked").val() === "days") {
      playTime *= 30;
    } else if($("input:radio[name=days]:checked").val() === "weeks") {
      playTime *= 4;
    } else if($("input:radio[name=days]:checked").val() === "months") {
      playTime *= 1;
    }


    


    $(".results").text("You play " + playTime + " hours of month.");

    event.preventDefault();
  });


});
