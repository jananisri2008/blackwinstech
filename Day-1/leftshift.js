/*The left shift operation is similar to multiplication by powers of two.
Sample calculation using the left shift operator (<<):
10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a function that mimics (without the use of <<) the left shift operator and returns 
the result from the two given integers.

Examples
shiftToLeft(5, 2) ➞ 20
shiftToLeft(10, 3) ➞ 80
shiftToLeft(-32, 2) ➞ -128
shiftToLeft(-6, 5) ➞ -192
shiftToLeft(12, 4) ➞ 192
shiftToLeft(46, 6) ➞ 2944
*/
function leftshift(x,y){
    let pow=2**y;
    return x*pow ;
}
console.log(leftshift(5,2));
console.log(leftshift(10,3));
console.log(leftshift(-32,2));
console.log(leftshift(-6,5));
console.log(leftshift(12,4));
console.log(leftshift(46,6));

