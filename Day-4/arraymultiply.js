/*Create a function that takes two numbers as arguments (num, length) and 
returns an array of multiples of num until the array length reaches length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 */
function arraymultiply(num, length) {
    const result = []; 
    for (let i = 1; i <= length; i++) {
        result.push(num * i); 
    }
    return result; 

}
console.log(arraymultiply(7, 5)); 
console.log(arraymultiply(12, 10)); 
console.log(arraymultiply(17, 6)); 
