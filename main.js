// REQUIRE FROM NPM //

var game = require('./game.js');
var word = require ('./word.js');
var letter = require ('./letter.js');
var inquirer = require ('inquirer');
var choice;

// VARIABLES //

exports.letter;
exports.songGuess;
//exports.gameOver = false;
exports.lives = 0;
exports.chosenSong = game.chooseSong();

//letter.showDisplay();
//letter.displaySong();

// USER INPUT  GUESS LETTER or WORD //

exports.requestInfo = function(){
	if(exports.lives >= 15){
		console.log("Busted, down on Buorbon Street. Retry?")
		exports.playAgain();
	}
	else{
	var questions = [
	{
		type: "list",
		name: "songDo",
		message: "What is your quess?\n You've burned "+exports.lives+" out of 15. Be COOL.",
		choices:[
		"letter", 
		"song"
		]
	}
];

	inquirer.prompt(questions).then(function(answers){

// GUESS LETTERS //
			
	if(answer.songDo = "letter"){
	var letterG = [
	{
		type: "input",
		name: "letter",
		message: "Thats already taken: "+song.letterArr+"\nNumber guessed: "
	}
];

	inquirer.prompt(letterG).then(function(answers){
		exports.letter = answer.letter;
		song.checker();
	})
}

// GUESS SONG //

	else if(answers.songDo == "song"){
	var songG = [
	{
		type: "input",
		name: "song",
		message: "What is this song?"
	}
];
	inquirer.prompt(songG).then(function(answers){
		exports.songGuess = answers.song;
		song.songChecker();		
	})
	}
	else{
		console.log("WRONG");
			exports.requestInfo();
		}
	})
	}
};
		
// GAME RESET //

exports.playAgain = function(){
	var questions = [
	{		
		type: "list",
		name: "playAgain",
		message: "Want another Hit?",
		choices:[
		"yes",
		"no"
		]
	}
];

	inquirer.prompt(questions).then(function(answers){
		if(answer.playAgain == "yes"){
			exports.lives = 0;
			exports.chosenSong = game.chooseSong();
			letter.guessedArr = [];
			letter.songArr = [];
			song.letterArr = [];
			letter.initDisplay();
			letter.displaySong();
			exports.requestInfo();
		}
		else{
			console.log("Keep on Truckin'");
		}
	});
}

//exports.requestInfo();