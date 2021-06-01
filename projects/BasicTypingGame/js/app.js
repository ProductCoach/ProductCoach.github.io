// Initiialize Player score and time
var score = 0;
var HighScore = [3, 2, 1];
var seconds=30;
var timer;

document.getElementById('tvalue').innerHTML = seconds;
// console.log(document.getElementById('tvalue').innerHTML);

// Identify DOM elements
const scoreText = document.getElementsByClassName('svalue');
const targetWord = document.getElementsByClassName('enemyName');
const highscoreModal = document.getElementById('highscore');
const overlay = document.getElementById('overlay');
const currentscore = document.getElementById('currentscore');
const inputText = document.getElementById('inputText');

var hscore1 = document.getElementById('score1');
var hscore2 = document.getElementById('score2');
var hscore3 = document.getElementById('score3');
// console.log(inputText);
// console.log(currentscore.innerText)

//Show a random word from wordlist
const wordlistLength = wordlist.length;
changeWord();

// Check for key presses
var wordMatch=false; //Test to see if work types matches the 'enemy' name

inputText.addEventListener('keyup', function (e) {
    searchstring = inputText.value;
    console.log(searchstring);
    matchWord(searchstring);
    setTimer();
});

function matchWord(searchstring) {
    lower_searchstring = searchstring.toLowerCase();

    if (lower_searchstring == targetWord[0].innerText.toLowerCase() && seconds > 0) {
        console.log("success!");
        wordMatch = true;
        updateScore();
        changeWord();
        inputText.value = '';
    }

}

function updateScore() {
    score = score + 1;
    wordMatch=false;
    scoreText[0].innerText = score;
}

function changeWord() {
    index = Math.floor(Math.random()*wordlistLength);
    targetWord[0].innerText = wordlist[index];
}

function setTimer() {
    if(!timer) {
        timer = window.setInterval(function() { 
            updateTimer();
        }, 1000); // every second
    }
}

function updateTimer() {
    if(seconds < 60) { // I want it to say 1:00, not 60
      document.getElementById('tvalue').innerHTML = seconds;
    }
    if (seconds > 0 ) { // so it doesn't go to -1
       seconds--;
    } else {
       clearInterval(timer);
       testHighscore();
    //    alert("Your score is "+score);
       inputText.disabled = true;
    }
}

function resetTimer() {
    seconds = 30;
    score = 0;
    scoreText[0].innerText = score;
    timer=false;
    setTimer();
    document.getElementById('tvalue').innerHTML = seconds;
    inputText.disabled = false;
}


function testHighscore(){
    highscoreModal.style.display = "block";
    overlay.style.display = "block";

    for (k=0; k < 3; k++) {
        if (score > HighScore[k]) {
            HighScore.splice(k, 0, score);
            console.log("High score");
            currentscore.innerHTML = "Well done! Your score is " + score; 
            break;
        }
    }

    hscore1.innerHTML = HighScore[0];
    hscore2.innerHTML = HighScore[1];
    hscore3.innerHTML = HighScore[2];
}


overlay.addEventListener('click', function() {
    highscoreModal.style.display = "none";
    overlay.style.display = "none";
})

// function SearchList(searchstring) {

//     lower_searchstring = searchstring.toLowerCase();
    
//     li = document.getElementsByTagName("li");
//     console.log('li')

//     for (j = 0; j < li.length; j++) {
//         if (li[j].innerHTML.toLowerCase().indexOf(lower_searchstring) > -1) {
//             found = true;
//         }
//         if (found) {
//             li[j].style.display = "";
//             found = false;
//         } else {
//             li[j].style.display = "none";
//         }
//     }
// }






// document.getElementById("textarea").onkeypress = function() {
//   if(!timer) {
//     timer = window.setInterval(function() { 
//       myFunction();
//     }, 1000); // every second
//   }
// } 

// document.getElementById("timer").innerHTML="1:00"; 