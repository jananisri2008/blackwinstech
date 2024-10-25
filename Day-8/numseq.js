/*A Normal Sequence
Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous two numbers modulo three.

Create a function that finds the nth element of the sequence.

Examples
normalSequence(1) ➞ 0

normalSequence(2) ➞ 1

normalSequence(3) ➞ 1
// (0+1)%3 = 1

normalSequence(20) ➞ 2
Notes
1 ≤ N ≤ 10^19
A hint in comments section. */

function numseq(n) {
    if (n === 1){
         return 0;
    }
    if (n === 2){
        return 1;
    }
    let a = 0; 
    let b = 1; 
    let result;
    let length= 8;
    let index = (n - 1) % length;
    for (let i = 0; i < index; i++) {
        result = (a + b) % 3; 
        a = b; 
        b = current; 
    }
    return b;
}
console.log(numseq(1));  
console.log(numseq(2));  
console.log(numseq(3));  
console.log(numseq(20)); 