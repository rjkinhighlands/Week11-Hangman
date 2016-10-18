// REQUIRE FROM NPM //

var game = require('./game.js');
var inquirer = require ('inquirer');

// VARIABLES //

var choice;

exports.letter;
exports.songGuess;
exports.chosenSong = game.chooseSong();

// USER INPUT //

exports.requestInfo = function(){
	var questions = [
	{
		type: "input",
		name: "songDo",
		message: "What is your quess? 'letter' or 'song'?"
	}
];

	inquirer.prompt(questions).then(function(answers){
		
		var answer = JSON.Stringify(answers.songDo);
		console.log(answers);

		if(answer == "letter"){
			guess("letter");
		}
		else if(answers == "song"){
			console.log("You've chosen a song");
		}
		else{
			console.log("Busted, down on Buorbon Street. Retry?");
			exports.requestInfo();
		}
	})
};

// USER INPUT FOR GUESS //

exports.guess = function(type){
	if(type == "letter"){
		var questions = [
		{
			type: "input",
			name: "song",
			message: "What song have you chosen?"
		}
	];

		inquirer.prompt(questions).then(function(answers){
			songGuess = answers.song;
			song.checker();		
	})
}
	else{
		var questions = [{
			type: "input",
			name: "song",
			message: "What song have you chosen?"
		}];

		inquirer.prompt(questions).then(function(answers){
			songGuess = answers.song;
			song.checker();		
		})
	}
};

exports.requestInfo();





























