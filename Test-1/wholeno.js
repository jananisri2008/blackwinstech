/*Is the Average of All Elements a Whole Number?
Create a function that takes an array as an argument and 
returns true or false depending on whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true
isAvgWhole([1, 2, 3, 4]) ➞ false
isAvgWhole([1, 5, 6]) ➞ true
isAvgWhole([1, 1, 1]) ➞ true
isAvgWhole([9, 2, 2, 5]) ➞ false
 */
function wholeno(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    if (average % 1 === 0) {
        return true; 
      } else {
        return false; 
        }
}
console.log(wholeno([1, 3]));          
console.log(wholeno([1, 2, 3, 4]));    
console.log(wholeno([1, 5, 6]));       
console.log(wholeno([1, 1, 1]));       
console.log(wholeno([9, 2, 2, 5]));    
