/*Create a function that validates whether a number n is within the bounds of lower and upper. 
Return false if n is not an integer.

Examples
intWithinBounds(3, 1, 9) ➞ true
intWithinBounds(6, 1, 6) ➞ false
intWithinBounds(4.5, 3, 8) ➞ false
 */
function integerrange(n,low,up){
    let result=false;
    if(Number.isInteger(n)){
        result=n>=low && n<up;
    }
    return result;
}
console.log(integerrange(3,1,9));
console.log(integerrange(6,1,6));
console.log(integerrange(4.5,3,8));
console.log(integerrange(4,3,2));