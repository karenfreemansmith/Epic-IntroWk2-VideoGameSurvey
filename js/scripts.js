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
    $(".panel1").hide();
    $(".panel2").show();
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

    var text = "";

    if (0 <= playTime && playTime <= 30) {
      text = "You need to play more video games like " + $("input#name").val() + "."
    } else if (31 <= playTime && playTime <= 90) {
      text = "You OK. You play " + $("input#name").val() + " an average amount of time for this generation.";
    } else if (91 <= playTime) {
      text = "You play " + $("input#name").val() + " way too much. You need a life... or another video game.";
    }


    $(".results").text("You play " + playTime + " hours of month. " + text );

    $(".panel2").hide();
    $(".panel3").show();

    event.preventDefault();
  });


});
