/*Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
 */
function muchtrue(b){
    let a=[true];
    let count=0;
    for(let i=0;i<b.length;i++){
        if(a[0]===b[i]){
            count++;
        }
    }
    return count;
}
console.log(muchtrue([true,false,false,true,false]));
console.log(muchtrue([false,false,false,false]));
console.log(muchtrue([]));