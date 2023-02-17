//7.	Guess Number
//Write a program that generates a random number between 1 and 100, inclusive.
//It then prompts the user to guess the number (assume valid entry).
//The program will provide the following feedback after each guess:
//•	Too low, guess again
//•	Too high, guess again
//•	Correct
//If correct, also display how many attempts it took.  For example:
//Correct!  It took you 7 attempts to guess the correct number.


// generating a random integer from 1 to 10
const random = Math.floor(Math.random() * 100) + 1;
// take input from the user
let number = parseInt(prompt('Guess a number from 1 to 100: '));
let totalGuess = 1;

  // take the input until the guess is correct
  while (number > random) {
    number = parseInt(prompt('Too high, guess again'));
  }
while (number < random) {
  number = parseInt(prompt('Too low, guess again'));
}
// check if the guess is correct
if (number === random) {
  console.log(`You guessed the correct number. It took you ${guessNumber} tries! `);
}