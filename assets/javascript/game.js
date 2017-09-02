$(document).ready(function () {
    start();

    var wins = 0;
    var losses = 0;


    function start() {
        $("#compNumber").empty();
        $("#userNumber").html(0);
        userScore = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#compNumber").html(targetNumber);
        console.log(targetNumber)


    }

    var blueValue = Math.floor(Math.random() * 12) + 1;

         var blueGem = $("#blue");

                 blueGem.addClass("crystal-image");

                     blueGem.attr("data-gemValue", blueValue);

    var redValue = Math.floor(Math.random() * 12) + 1;

        var redGem = $("#red");

            redGem.addClass("crystal-image");

                redGem.attr("data-gemValue", redValue);

    var pinkValue = Math.floor(Math.random() * 12) + 1;

        var pinkGem = $("#pink");

            pinkGem.addClass("crystal-image");

                    pinkGem.attr("data-gemValue", pinkValue);

   var greenValue = Math.floor(Math.random() * 12) + 1;

        var greenGem = $("#green");

             greenGem.addClass("crystal-image");

                    greenGem.attr("data-gemValue", greenValue);




});