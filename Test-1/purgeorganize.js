/*Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */
function purgeorganize(arr) {
       let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]); 
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array; 
}
console.log(purgeorganize([1, 2, 4, 3]));
console.log(purgeorganize([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); 
console.log(purgeorganize([6, 7, 3, 2, 1])); 
/*output
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 6, 7 ]*/
    
