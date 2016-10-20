// REQUIRES GAME //

var main = require("./main.js");
var letter = require("./letter.js");
exports.letterArr = [];

// VARIABLE for chosenSong //

exports.checker = function(){
	var songToCheck = main.chosenSong;
	exports.letterArr.push(main.letter);
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
	main.requestInfo();
};

// CORRECT? //

exports.songGuess = function(){
	var guess = main.songGuess;
	var song = main.chosenSong;
	var isNotEqualto;

// CHECK GUESSES //

	for(var d = 0; d<song.length; g++){
		if(guess[d] !=song[d]){
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
