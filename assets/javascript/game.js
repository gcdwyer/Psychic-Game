// set guesses variable to 9
var guesses = 9;

// add array of every letterin alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// set wins and losses to 0
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var userGuess;

// add keypress
document.onkeyup = function(event) {
var userGuess = event.key;

	// randomly select a letter from array
	var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log("random letter: " + randomLetter); //Debug

	// if userGuess = ranndomLetter is correct, you win
	if (userGuess === randomLetter) {
		wins++;
		lettersGuessed = [];
	// else decrement guesses
	} else {
		guesses--;
		lettersGuessed[lettersGuessed.length] = userGuess;
	}

	// when guesses get down to 0, increment losses
	if (guesses === 0) {
	losses++;
	// reset array to open
	lettersGuessed = [];
	//reset guesses back to 9
	guesses = 9;
	}

	// display to innerHTML
	document.getElementById('wins').innerHTML = "Wins: " + wins;
	document.getElementById('losses').innerHTML = "Losses: " + losses;
	document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
	document.getElementById("chosen").innerHTML = "Letters guessed: " + lettersGuessed;
}