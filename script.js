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

// Solution
function printPyramid(n) {
    for (let i = 1; i <= n; i++ ) {
        let row = "";

        for (j = 1; j <= n -i; j++) {
            row+=" ";
        }

        for (k = 1; k <= 2 * i - 1; k++) {
            row+="*"
        }

        console.log(row);
    }

    
}

printPyramid(5)


/* Problem 3: 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.
*/

// first try
/* let num = 0;
for (let i = 1; i<=3; i++) {
    num ++;
    multiples = 3*num;
    console.log(multiples)
}

let numInitial = 0

for (let j =1; j<=10; j++) {
    numInitial ++
    multiplesofFive = 5*numInitial;

    console.log(multiplesofFive)   
} */

//solution  
function solution(number) {
    if (number < 0) return 0;

    let sum = 0;
    for (let i = 1; i < number; i++) {
       if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
       }
    }
    return sum

    
}

console.log (solution(20))


/*random question from udemy js course

Password validation...
1. At least 7 characters
2. Cannot contain username
3. Cannot contain space

Return true if all requirement is met otherwise false.*/

// solution
function isPasswordValid (password, username) {
    const charReg = /^.{7,}$/;
    return charReg.test(password) && !(password.includes(" ")) &&  !(password.includes(username))
}

console.log(isPasswordValid('89Fjj1nms', 'Owusu'))

/* Problem 4:

Pete likes to bake some cakes. He has some recipes and ingredients. 
Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0.
*/



function makeCake (recipe, available) {

    let cakes = Infinity;

    for (let ingredients in recipe) {
        if (!available[ingredients]) return 0;  //Ingredients that are not present in the objects 

        const possible = Math.floor(available[ingredients] / recipe[ingredients])
        cakes = Math.min(cakes, possible)
    }

    console.log(cakes) 

}

makeCake ({ flour: 500, sugar: 200}, {flour: 2000, sugar: 700, eggs: 2})


/* Problem 5:
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/



let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

// read on regular expressions
console.log(incrementString("foo0001"))