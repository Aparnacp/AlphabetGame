"use strict";

//An array of all letters of the alphabet that users could guess.
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let value = 10;
// console.log(alphabet.length);
//Select an alphabet at random for users to guess.
let random = Math.floor(Math.random() * alphabet.length);
console.log(random, String(alphabet[random]), typeof alphabet[random]);

//function to show message according to the user's guess
const showMessage = function (message) {
  console.log(message);
  document.querySelector(".message").textContent = message;
};

//
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  //   console.log(guess, alphabet[random]);
  //   console.log(guess > alphabet[random]);
  guess = guess.toUpperCase();
  console.log(guess);

  // When there is no input
  if (!guess) {
    showMessage("❌ No input!");

    // When player wins
  } else if (guess === alphabet[random]) {
    // document.querySelector(".message").textContent = "👍 Correct Guess!";
    showMessage("👍 Correct Guess !");
    document.querySelector(".letter").textContent = alphabet[random];
    // document.querySelector(".letter").style.backgroundColor = "hotpink";
    // document.querySelector(".letter").style.color = "HOTPIN";
  } else if (guess > alphabet[random]) {
    // console.log(guess > alphabet[random]);
    if (value > 1) {
      document.querySelector(".message").textContent = "Far Too Right!";
      value--;
      document.querySelector(".value").textContent = value;
    } else {
      document.querySelector(".message").textContent =
        "👎 Better luck next time!";
      document.querySelector(".value").textContent = 0;
    }

    // When guess is far too left
  } else if (guess < alphabet[random]) {
    console.log(guess > alphabet[random]);
    if (value > 1) {
      document.querySelector(".message").textContent = " Far Too Left!";
      value--;
      document.querySelector(".value").textContent = value;
    } else {
      document.querySelector(".message").textContent =
        "👎 Better luck next time!";
      document.querySelector(".value").textContent = 0;
    }
  }
});

document.querySelector(".playagain").addEventListener("click", function () {
  value = 10;
  random = Math.floor(Math.random() * alphabet.length);

  // document.querySelector('.message').textContent = 'Start guessing...';
  showMessage("Start guessing...");
  document.querySelector(".value").textContent = value;
  document.querySelector(".letter").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector(".letter").style.backgroundColor = "white";
  document.querySelector(".letter").style.color = "hotpink";
  //   document.querySelector(".number").style.width = "15rem";
});
