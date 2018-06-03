// start with win and loss counter of 0
// start with guess counter of 9
// create an array which will contain user guess history
// Get user input
// upper case it
// Randomly generate one uppercase character
// If guess right, increase the win counter and reset guess counter to initial value
// if loss, 
// -- decrease the guess counter
// -- put user guess in guess history
// -- decrease the guess counter
// If guess counter is 0
// -- initialize guess counter
// -- initialize guess history

var winCount = 0;
var lossCount = 0;
var guessHistory = [];
var guessesLeft;

initState();
printOut();

document.onkeyup = processUserGuess;

initState();

function initState() {
    guessHistory = [];
    guessesLeft = 9;
}

function processUserGuess(event) {
    //debugger
    var userGuess = event.key.toUpperCase();
    var randomChar = generateRandomChar();
    //console.log("User guess:" + userGuess + " random:" + randomChar);
    if (/^[A-Z]$/.test(userGuess)) {
        if (userGuess === randomChar) {
            processCorrectGuess();
        }
        else {
            processWrongGuess(userGuess);
        }

        printOut();
    }
    else {
        alert("Please press A-Z keys only");
    }
}

function processCorrectGuess() {
    ++winCount;
    initState();
}

function processWrongGuess(userGuess) {
    if (--guessesLeft === 0) {
        ++lossCount;
        initState();
    }
    else {
        guessHistory.push(userGuess);
    }
}

// Returns a random char between "A-Z" (uppercase)
function generateRandomChar() {
    var randNum = Math.floor(Math.random() * 25);
    var randCharCode = "A".charCodeAt(0) + randNum;
    return String.fromCharCode(randCharCode);
}

function printOut() {
    var winElem = document.getElementById("win");
    var lossElem = document.getElementById("loss");
    var guessesLeftElem = document.getElementById("guesses-left");
    var guessHistElem = document.getElementById("user-guess-history");
    
    winElem.textContent = "Wins:" + winCount;
    lossElem.textContent = "Loss:" + lossCount;
    guessesLeftElem.textContent = "Guesses Left:" + guessesLeft; 
    guessHistElem.textContent = guessHistory.join(",");    
}