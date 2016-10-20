// REQUIRES GAME //

var main = require("./main.js");
var letter = require("./letter.js");

// VARIABLE for chosenSong //

exports.checker = function(){
	var songToCheck = main.chosenSong;
	var detected = 0;
	for(var i = 0; i < songToCheck.length; i++){
		if(songToCheck.charAt(i) == main.letter){
		letter.editArray(i, main.letter);
		detected++;
		}
	}
	letter.displaySong();
	if(detected == 0){
		main.lives++;
	}
	if(main.gameOver == false){
		main.requestInfo();
	}
	else if(main.gameOver  == true){
		console.log("GAME OVER");
	}
};

// CORRECT? //

exports.songGuess = function(){
	var guess = main.songGuess;
	var song = main.chosenSong;
	var isNotEqualto;

// CHECK GUESSES //

	for(var g = 0; g<song.length; g++){
		if(guess[g] !=song[g]){
			isNotEqualto = false;
	}
	else{
		isNotEqualto = true
	}
	}
	if(isNotEqualto == true){
		console.log("Groovy, you got it");
		main.playAgain();
	}
	else{
		console.log("Bummer, wrong");
		main.lives++;
		main.requestInfo();
	}
};
