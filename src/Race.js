function SetUpGame(){
  $("#racetrack .active").removeClass("active");
  $("#player1_strip").children().first().addClass("active");
  $("#player2_strip").children().first().addClass("active");
}

function UpdatePosition(player_number){
    selector = "#player" + player_number + "_strip .active"
    $(selector).next().addClass("active");

  }

function PlayerWon( player_number ){
  var selector = "#player" + player_number + "_strip td";
  return $(selector).last().hasClass("active");
}

function DeclareWinner(player_number){
  $("#declare_winner").text("Player " + player_number + " wins!"); 
}

$(document).on("keyup", function(event){
  
  if (!(PlayerWon(1)) && !(PlayerWon(2))){

    if(event.keyCode === 76){
      UpdatePosition("1");
      if (PlayerWon("1") === true){
        DeclareWinner("1");
      }
    }
    if(event.keyCode === 65){
      UpdatePosition("2");
      if (PlayerWon("2") === true){
        DeclareWinner("2");
      }
    }
   }
 });

SetUpGame();


