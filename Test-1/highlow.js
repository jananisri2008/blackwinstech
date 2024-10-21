/*Return the Highest and Lowest Numbers
Create a function that accepts a string of space separated numbers and 
returns the highest and lowest number (as a string).

Examples
highLow("1 2 3 4 5") ➞ "5 1"
highLow("1 2 -3 4 5") ➞ "5 -3"
highLow("1 9 3 4 -5") ➞ "9 -5"
highLow("13") ➞ "13 13"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first. */


function highlow(numbers) {
   let numArray = numbers.split(' ');
    let high = Number(numArray[0]);
    let low = Number(numArray[0]);
    for (let i = 1; i < numArray.length; i++) {
        let num = Number(numArray[i]);
        if (num > high) {
            high = num;
        }
        if (num < low) {
            low = num;
        }
    }
     return `${high} ${low}`;
}
console.log(highlow("1 2 3 4 5"));     
console.log(highlow("1 2 -3 4 5"));    
console.log(highlow("1 9 3 4 -5"));    
console.log(highlow("13"));           

/*output
5 1
5 -3
9 -5
13 13*/
