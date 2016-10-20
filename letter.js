var main = require('./main.js');
exports.guessedArr = [];
var guessedDisplay = "";
exports.songArr = [];

// ARRAY //

exports.showDisplay = function(){
	var songChoice = main.chosenSong;
	for (var i = 0; i<songChoice.length; i++){
		exports.songArr.push(songChoice.charAt(i));
		if(songChoice.charAt(i) == '\xa0'){
			exports.guessedArr.push('\xa0');
		}
		else{
		exports.guessedArr.push('_');
		}
	};
}

// GUESS DISPLAY //

exports.displaySong = function(){
	guessedDisplay = "";
	for(var i = 0; i <exports.guessedArr.length; i++){
		guessedDisplay += exports.guessedArr[i]+" ";
	}
	console.log(guessedDisplay);
};

// CORRECT GUESSES //

exports.editArray = function(position, letter){
	exports.guessedArray[position] = letter;
};