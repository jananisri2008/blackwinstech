/*The right shift operation is similar to floor division by powers of two.
Sample calculation using the right shift operator ( >> ):

80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Write a function that mimics (without the use of >>) the right shift operator and returns 
the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10
shiftToRight(-24, 2) ➞ -6
shiftToRight(-5, 1) ➞ -3
shiftToRight(4666, 6) ➞ 72
shiftToRight(3777, 6) ➞ 59
shiftToRight(-512, 10) ➞ -1
 */
function rigthshiftdivision(num1, num2) {
    return Math.floor(num1 / Math.pow(2, num2));
}
console.log(rigthshiftdivision(80, 3));    
console.log(rigthshiftdivision(-24, 2));   
console.log(rigthshiftdivision(-5, 1));    
console.log(rigthshiftdivision(4666, 6));  
console.log(rigthshiftdivision(3777, 6));  
console.log(rigthshiftdivision(-512, 10)); 
