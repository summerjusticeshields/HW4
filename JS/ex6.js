//6.	Strings and Functions
//Write a program that asks the user for a word.  It then displays the following:
//•	Number of vowels in the word (a, e, i, o, u, and y)
//•	Whether your word is a palindrome or not
//o	A palindrome is a word that is spelled the same way both forward and backwards (e.g. radar, level, madam)

//Examples:
//Input: Madam
//Output: Madam contains 2 vowels and is a palindrome

//Input: JavaScript
//Output: JavaScript contains 3 vowels and is not a palindrome

//Notes:  
//a.	Create two functions per the following.
//This can be solved many ways.  I want to make sure you know how to work with "black box" functions.  Given an input, the function returns an output.  The user is not concerned with the details of how the output is calculated or the function displaying output in a specific format.  The user gets the returned value and uses it as needed.
//i.	Compute number of vowels.  Use the following
//Input:  Word (given above)
//Return: Number of vowels
//ii.	Determine if the word is a palindrome.  Use the following
//Input:  Word (given above)
//Return: True/False or Yes/No or similar
//b.	Program is case insensitive


// Get a word from the user
const word = prompt("Please enter a word");

// Display information about the word
console.log("You entered: ", word)
console.log("The length is: ", word.length);


// Check if there is an e in the word (case insensitive)
const indexOfE = word.toLowerCase().indexOf("e");
if (indexOfE !== -1) {
  console.log('Your word contains the letter "e"');
  console.log("It is at position/index: ", indexOfE);
} else {
  console.log('Your word does not contain the letter "e"');
}

// Loop to display the characters
console.log("The characters are: ");
for (char of word) {
  console.log(char);
}

// Convert to array and display using a forEach loop
const wordArray = Array.from(word);
console.log("==================================");
console.log("The characters are: ");
wordArray.forEach(ch => {
  console.log(ch);
})

function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a','e','i','o','u','y']
    for (let char of str){
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
        return vowelsCount
}