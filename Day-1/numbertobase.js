/*Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number.
 To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, 
now from that every bit to the left will be x2 the value, 
value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10
*/
function binary(decimalString) {
    let decimalNumber = parseInt(decimalString, 10);
    
    let binaryString = '';

    while (decimalNumber > 0) {
        let remainder = decimalNumber % 2;// Get the remainder dividing by 2----> binary digit)
        binaryString = remainder + binaryString;// Add the remainder to the binary string
        decimalNumber = Math.floor(decimalNumber / 2);// Update the decimal number by dividing by 2
        
    }

    // If the binary string is empty (for the case of 0), return "0"
    return binaryString === '' ? '0' : binaryString;
}
console.log(binary("1"));  
console.log(binary("8"));  
console.log(binary("5")); 
