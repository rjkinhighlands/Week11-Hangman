// REQUIRES GAME.JS  //

var main = require("./main.js");

// VARIABLE for chosenSong //

var songToCheck = main.chosenSong;
	console.log("Song to verify is "+songToCheck);
	console.log("Letter: "+main.letter);
	console.log("Song quessed: "+main.songGuess);

// LETTER CHECK //

exports.checker = function(){
	for(var i = 0; i < songToCheck.length; i++){
		console.log(songToCheck.charAt(i));
		if(songToCheck.charAt(i) == main.letter){
			console.log("I'm your Uncle Sam thats who I am")
		}
		else{
			console.log("Concerts Over");
		}	
	}	
};
