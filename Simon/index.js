//Making getting pressed event
var buttonColours= ["red","blue","green","yellow"];
var game_sequence = [];
var userSequence = [];

started = false;
level = 0;
$(document).keypress(function (e) {
    if(!started){
        newSequence();
        started = true;
    }
});


$(".btn").on("click", function (event) {
    // console.log($(event.target).css("background-color"));
    userSequence.push($(this).attr("id"));
    make_sound($(event.target).attr("id"));
    button_pressed($(event.target).attr("id"));
    checkAnswer(userSequence.length -1);
});

function button_pressed(id) {
    $("#"+id).addClass("pressed");
    setTimeout(() => {
        $("#"+id).removeClass("pressed");
    }, 50);
}

function make_sound(id){
    var audio = new Audio("./sounds/"+id+".mp3")
    audio.play();
}

function checkAnswer(level) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (game_sequence[level] === userSequence[level]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userSequence.length === game_sequence.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          newSequence();
        }, 1000);

      }

    } else {
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
            
          }, 200);

        console.log("wrong");
        startOver();
    }

}


function newSequence() {
    userSequence = [];
    var a = Math.floor(Math.random()*4);
    game_sequence.push(buttonColours[a]);
    level++;
    $("h1").text("Level "+level);

    button_pressed(buttonColours[a]);
    make_sound(buttonColours[a]);

}

function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    game_sequence = [];
    started = false;
  }

