//1.	
let num1 = Number(prompt('Enter number 1 :'))
let num2 = Number(prompt('Enter number 2:'))
let operator = Number(prompt('Enter mathematical operation:'))
if (operator = '+'); {
  console.log(`${num1} ${operator} ${num2} =`, num1 + num2)
}
if (operator = '-') {
  console.log(`${num1} ${operator} ${num2} =`, num1 - num2)
}

if (operator = '*') {
  console.log(`${num1} ${operator} ${num2} =`, num1 * num2)
}

if (operator = '/') {
  console.log(`${num1} ${operator} ${num2} =`, (num1 / num2))
}









// Class Notes

// Display 10 random numbers

for (let i = 0; i < 10; i++) {
  console.log(Math.random());
  break;
}

// Display 10 random integers from 1 - 10

for (let i = 0; i < 10; i++) {
  console.log(Math.trunc(10 * Math.random() + 1));
  break;
}


//Method 1 - Function declaration

function myFunction(n1, n2) {
  return (n1 + n2);

  console.log(myFunction(3, 1000));
}
// Method 2
function myFunc(n1, n2) {
  console.log(`The sum of ${n1} + ${n2} = ${myFunc(n1, n2)}`);
  myFunc(15, 2000);
}



