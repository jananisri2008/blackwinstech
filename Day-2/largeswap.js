/*Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:
largestSwap(27) ➞ false
largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27.
 On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false
largestSwap(53) ➞ true
largestSwap(99) ➞ true */
function largeswap(a,b){
    let temp=0;
    temp=a;
    a=b;
    b=temp;
    if(a<=b){
        return true;
    }
    else{
        return false;
    }
}
console.log(largeswap(27,72));
console.log(largeswap(43,34));
console.log(largeswap(14,41));
console.log(largeswap(53,35));
console.log(largeswap(99,99));