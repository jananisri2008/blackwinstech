/*Create a function that will take a HEX number and returns the binary equivalent (as a string).

Examples
toBinary(0xFF) ➞ "11111111"
toBinary(0xAA) ➞ "10101010"
toBinary(0xFA) ➞ "11111010"*/
function demo(hex) {
    return (hex >>> 0).toString(2);
}

console.log(demo(0xFF)); 
console.log(demo(0xAA)); 
console.log(demo(0xD9)); 