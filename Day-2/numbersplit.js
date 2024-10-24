/*Given a number, return an array containing the two halves of the number. 
If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]
numberSplit(10) ➞ [5, 5]
numberSplit(11) ➞ [5, 6]
numberSplit(-9) ➞ [-5, -4]
 */
function numbersplit(n){
    let firsthalf=Math.floor(n/2);
    let secondhalf=Math.ceil(n/2);
    return [firsthalf,secondhalf];
}
console.log(numbersplit(4));
console.log(numbersplit(10));
console.log(numbersplit(11));
console.log(numbersplit(-9));