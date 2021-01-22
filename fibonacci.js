//Program to print fibonacci series

var i;
var fibArr = [];
var number = parseInt(prompt("Enter the number: "));
fibArr[0] = 0;
fibArr[1] = 1;

// loop through array
for (i = 2; i <= number; i++) {
  fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
  console.log(fibArr[i]);
}
