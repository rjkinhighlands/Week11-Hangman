// REQUIRE FROM NPM //

var word = require('./word.js');
var game = require('./game.js');
var inquirer = require('inquirer');
var isLetter = require('is-letter');

// HANGMAN //

var hangManDisplay = game.newSong.hangman;

// MAXLISTENER //

require('events').EventEmitter.prototype._maxListeners = 100;


var hangman = {
  songBank: game.newSong.songList,
  guessesRemaining: 10,
  guessedLetters: [],
  display: 0,
  currentWord: null,

  // START //

  startGame: function() {
    var that = this;
    if(this.guessedLetters.length > 0){
      this.guessedLetters = [];
    }

    inquirer.prompt([{
      name: "play",
      type: "confirm",
      message: "Want to play Grateful Dead Greatest Hits Hangman?"
    }]).then(function(answer) {
      if(answer.play){
        that.newGame();
      } else{
        console.log("Busted, down on Buorbon Street.");
      }
    })},

  // NEW GAME //

  newGame: function() {
    if(this.guessesRemaining === 10) {
      console.log("Ready! Lets play!");

//RANDOM NUMBER //

      var randNum = Math.floor(Math.random()*this.songBank.length);
      this.currentSong = new Song(this.songBank[randNum]);
      this.currentSong.getLets();

// CURRENT WORD //

      console.log(this.currentSong.songRender());
      this.keepPromptingUser();
      
    } else{
      this.resetGuessesRemaining();
      this.newGame();
    }
  },
  resetGuessesRemaining: function() {
    this.guessesRemaining = 10;
  },
  keepPromptingUser : function(){
    var that = this;

// CHOOSE LETTER //

    inquirer.prompt([{
      name: "choose",
      type: "input",
      message: "Choose a letter:",
      validate: function(value) {
        if(isLetter(value)){
          return true;
        } else{
          return false;
        }
      }
    }]).then(function(ltr) {

// ADDS GUESSES //

      var guessedAlready = false;
        for(var i = 0; i<that.guessedLetters.length; i++){
          if(letterReturned === that.guessedLetters[i]){
            guessedAlready = true;
          }
        }
        
        if(guessedAlready === false){
          that.guessedLetters.push(letterReturned);

          var found = that.currentSong.checkIfLetterFound(letterReturned);

// WRONG //

          if(found === 0){

            console.log('Nope! You guessed wrong.');

            that.guessesRemaining--;
            that.display++;

            console.log('You have burned: ' + that.guessesRemaining);
            console.log(hangManDisplay[(that.display)-1]);
            console.log(that.currentSong.songRender());
            console.log("Letters guessed: " + that.guessedLetters);
          } else{
            console.log('You are correct!');

// WINNER? //

              if(that.currentSong.didWeFindTheSong() === true){
                console.log(that.currentSong.songRender());
                console.log('You win. Keep on Truckin');

              } else{

// GUESSES LEFT //

                console.log('Guesses remaining: ' + that.guessesRemaining);
                console.log(that.currentSong.songRender());
                console.log("Letters guessed: " + that.guessedLetters);
              }
          }
          if(that.guessesRemaining > 0 && that.currentSong.songFound === false) {
            that.keepPromptingUser();
          }else if(that.guessesRemaining === 0){
            console.log('Game over!');
            console.log('The word you were guessing was: ' + that.currentSong.song);
          }
        } else{
            console.log("Already used. Retry.")
            that.keepPromptingUser();
          }
    });
  }
}

hangman.startGame();

