/*Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples2
bitwiseAND(6, 23) ➞ 00000110
bitwiseOR(6, 23) ➞ 00010111
bitwiseXOR(6, 23) ➞ 00010001*/
function bitwiseAND(a,b){
    return (a&b).toString(2).padStart(8,0)
}
function bitwiseOR(a,b){
    return(a|b).toString(2).padStart(8,0)
}
function bitwiseXOR(a,b){
    return(a^b).toString(2).padStart(8,0)
}
console.log(bitwiseAND(6,23))
console.log(bitwiseOR(6,23))
console.log(bitwiseXOR(6,23))