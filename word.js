// REQUIRE LETTER.JS //

var Letter = require('./letter.js');

function Song(sng) {
  var that = this;

  this.song = sng;
  this.letters = [];
  this.songFound = false;

  this.getLets = function() {

// NEW LETTERS //

    for(var i = 0; i<that.song.length; i++){
      var newLetter = new Letter(that.song[i]);
      this.letters.push(newLetter);
    }
  };

// CURRENT WORD //

  this.didWeFindTheSong = function() {
    if(this.letters.every(function(lttr){
      return lttr.appear === true;
    })){
      this.songFound = true;
      return true;
    }

  };

  this.checkIfLetterFound = function(guessedLetter) {
    var whatToReturn = 0;

// MATCH GUESSES //

    this.letters.forEach(function(lttr){
      if(lttr.letter === guessedLetter){
        lttr.appear = true;
        whatToReturn++;
      }
    })
 // CORRECT GUESS //

    return whatToReturn;
  };

  this.songRender = function() {
    var display = '';

    that.letters.forEach(function(lttr){
      var currentLetter = lttr.letterRender();
      display+= currentLetter;
    });

    return display;
  };
}

module.exports = Song;