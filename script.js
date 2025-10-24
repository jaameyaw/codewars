'strict mode';

console.log("Welcome to CodeWars! Solve problems using JavaScript.");

/* Problem 1: 
Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

twoSum([1, 2, 3], 4)  returns [0, 2] or [2, 0]
*/
// Solution:
function twoSum (numbers, target) {
    if (numbers.filter(num => Number.isInteger(num)) && numbers.length >= 2) {
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i, j]
                } 
            }

        }
    } else {
        return "Invalid Input"
    }

    return n;
}
console.log (twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]


/* Problem 2:
Write a function that takes a postive integer n as input and prints a pyramid pattern of asterisks (*) with n rows 

For example, if n = 5, the output should be:
    *
   ***
  *****  
 *******
*********
*/

function printPyramid (n) {
    let ast;
    for (let i = 0; i < n; i++) {
        let space = ""
        for (j = i + 1; j<n; j++) {
            ast = "*";
            space +=ast 
            
        }
    }

    console.log (ast)
}

console.log (printPyramid(5))