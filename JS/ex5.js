//5.	List of words
//Write a program that asks the user for a word until the user types "stop" (case insensitive: e.g.: STOP, stop, Stop, StOp, …).  The program then shows each of these words, except "stop".  If "stop" is the first word entered, display an appropriate message.
//Notes:
//•	Use a loop to accept user input and exit when "stop" is entered (case insensitive)
//•	If "stop" is not entered, add the words to an array
//•	When "stop" is entered, display the words in the array.

//Examples:
//Input: hello, goodbye, JavaScript, stop
//Output:
//You entered the following words:
//hello
//goodbye
//JavaScript

//Input: Stop
//Output (below or similar):
//No words to display, Stop was the first word entered.

//let word = (prompt('Enter a word :'))

let word = (prompt('Enter a word :'))
while (word !== ('stop')) {
    console.log(prompt('Enter a word :'))
    if (word == 'stop')
        console.log('No more words to display.')
}


