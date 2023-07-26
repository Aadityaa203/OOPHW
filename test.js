// 3. Create an array that is multi-dimensional (it has arrays as its value).
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array
let nestedArr = [["hello", "brother"], [1, 2], [undefined], [true, false]];

// 4. Create a function that takes a multi-dimensional array as an argument and console.logs every value in that two-dimensional array using a for-loop inside a for-loop.
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops
function nestedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}
nestedArray(nestedArr);

// 5. Create a function that receives two numbers as arguments. The function should return whichever argument is the largest.
// Finally, console.log the function passing in two numbers as arguments.
function largestNumofTwo(num1, num2) {
  return Math.max(num1, num2);
}
console.log("the largest number is " + largestNumofTwo(9, 6));
console.log("the largest number is " + largestNumofTwo(3, 8));
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator

// 6. Create a function that receives two values as arguments. The function should return one string if the two values are equal, and a different string if the two values are different. You may either test for equality in value or for equality in value /and/ type.
function findString(a, b) {
  if (a === b) {
    return "The values are equal";
  } else {
    return "the values are not equal";
  }
}
// Finally console.log the function with two equal arguments, and then console.log the function with two arguments that are not equal.
console.log(findString(5, 6));
console.log(findString(4, 4));
