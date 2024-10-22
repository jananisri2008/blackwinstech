/*Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */
function purgeorg(arr) {
       let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]); 
        }
    }
    for (let i = 0; i < uniqueArray.length; i++) {
        for (let j = i + 1; j < uniqueArray.length; j++) {
            if (uniqueArray[i] > uniqueArray[j]) {
                let temp = uniqueArray[i];
                uniqueArray[i] = uniqueArray[j];
                uniqueArray[j] = temp;
            }
        }
    }
    return uniqueArray; 
}
console.log(purgeorg([1, 2, 4, 3]));
console.log(purgeorg([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); 
console.log(purgeorg([6, 7, 3, 2, 1])); 
/*output
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 6, 7 ]*/
    
