var Letter = function(ltr) {

// STORE LETTER //

  this.letter = ltr;

// SHOW LETTER //

  this.appear = false;

  this.letterRender = function() {
    if(this.letter == ' '){ 
      this.appear = true;
      return '  ';
    }if(this.appear === false){ 
      return ' _ ';
    } else{ 
      return this.letter;
    }
  };
};

 // EXPORT //

module.exports = Letter;