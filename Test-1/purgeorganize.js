/*Given an array of numbers, write a function that returns an array that...

Has all duplicate elements removed.
Is sorted from least to greatest value.
Examples
uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */
function purgeorganize(arr){
        let uniqueArray = [];
    
        for (let i = 0; i < arr.length; i++) {
            let isDuplicate = false;
    
            for (let j = 0; j < uniqueArray.length; j++) {
                if (arr[i] === uniqueArray[j]) {
                    isDuplicate = true; 
                    break;
                }
            }
    
            if (!isDuplicate) {
                uniqueArray.push(arr[i]);
            }
        }
    
    
        let sortedArray = [];
    
        while (uniqueArray.length > 0) {
            let smallest = uniqueArray[0]; 
            let smallestIndex = 0; 
    
        for (let i = 1; i < uniqueArray.length; i++) {
                if (uniqueArray[i] < smallest) {
                    smallest = uniqueArray[i]; 
                    smallestIndex = i; 
                }
            }
            sortedArray.push(smallest);
    
            
            let newArray = [];
            for (let i = 0; i < uniqueArray.length; i++) {
                if (i !== smallestIndex) {
                    newArray.push(uniqueArray[i]); 
                }
            }
            uniqueArray.length = 0;
            for (let i = 0; i < newArray.length; i++) {
                uniqueArray.push(newArray[i]); 
           }
        }
    
        return sortedArray; 
    }
    console.log(purgeorganize([1, 2, 4, 3]));             
    console.log(purgeorganize([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); 
    console.log(purgeorganize([6, 7, 3, 2, 1]));            
    