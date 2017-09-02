$(document).ready(function () {
    start();

    var wins = 0;
    console.log(wins);
    var losses = 0;
    console.log(losses);


    function start() {
        $("#compNumber").empty();
        $("#userNumber").html(0);
        currentScore = 0;
        targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#compNumber").html(targetNumber);
        console.log(targetNumber);



        var blueValue = Math.floor(Math.random() * 12) + 1;
        console.log(blueValue);

        var blueGem = $("#blue");

        blueGem.addClass("crystal-image");

        blueGem.attr("data-gemValue", blueValue);

        var redValue = Math.floor(Math.random() * 12) + 1;
        console.log(redValue);

        var redGem = $("#red");

        redGem.addClass("crystal-image");

        redGem.attr("data-gemValue", redValue);

        var pinkValue = Math.floor(Math.random() * 12) + 1;
        console.log(pinkValue);

        var pinkGem = $("#pink");

        pinkGem.addClass("crystal-image");

        pinkGem.attr("data-gemValue", pinkValue);

        var greenValue = Math.floor(Math.random() * 12) + 1;
        console.log(greenValue);

        var greenGem = $("#green");

        greenGem.addClass("crystal-image");

        greenGem.attr("data-gemValue", greenValue);
    }

    $(".crystal-image").on("click", function () {

        //targets the clicked gem picture and retrieves its stored value (random number between 1 and 12)
        var crystalValue = ($(this).attr("data-gemValue"));

        //the returned string value of the random number is converted to an integer
        crystalValue = parseInt(crystalValue);

        //for each click, add to a global currentScore used for the player's score
        currentScore += crystalValue;

        //updates the player's current score on the page
        $("#userNumber").text(currentScore);

        //win condition, user wins when their score equals the target number
        if (targetNumber === currentScore) {
            //updates page to say the user won
            $("#win-lose").html("<h4>You won!</h4>").attr("class", "green-font");
            //win count is increased by 1
            wins += 1;
            //win count is updated on the page
            $("#wins").text(wins);
            //runs a reset function
            start();
        }
        //lose condition, user loses if their score is greater than the target number
        else if (targetNumber < currentScore) {
            //updates page to say user lost
            $("#win-lose").html("<h4>You lost!</h4>").attr("class", "red-font");
            //loss count is increased by 1
            losses += 1;
            //loss count is updated on the page
            $("#losses").text(losses);
            //runs a reset function
            start();
        }

    })







});