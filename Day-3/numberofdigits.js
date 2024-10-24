/*Create a function that will return an integer number corresponding to the amount of digits in the 
given integer num.

Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
num_of_digits(0) ➞ 1
 */
function numberofdigits(num) {
    if (num === 0) {
        return 1;
    }

    let count = 0;
    let res= Math.abs(num);
    while (res > 0) {
        count++;
        res = Math.floor(res / 10); 
    }

    return count;
}
console.log(numberofdigits(1000));          
console.log(numberofdigits(1254));           
console.log(numberofdigits(1305981031));    
console.log(numberofdigits(0));              
