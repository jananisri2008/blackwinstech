/*Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples1
bitwiseAND(7, 12) ➞ 4
bitwiseOR(7, 12) ➞ 15
bitwiseXOR(7, 12) ➞ 11

*/
function bitwiseAND(a,b){
    return a&b;
}
function bitwiseOR(a,b){
    return a|b;
}
function bitwiseXOR(a,b){
    return a^b;
}
console.log(bitwiseAND(7,12));
console.log(bitwiseOR(7,12));
console.log(bitwiseXOR(7,12));