/*Create a function that takes an array of numbers and returns the second largest number.

Examples
secondLargest([10, 40, 30, 20, 50]) ➞ 40
secondLargest([25, 143, 89, 13, 105]) ➞ 105
secondLargest([54, 23, 11, 17, 10]) ➞ 23
 */
function secondlarge(arr) {
    let large = [0]; 
    let small = [0]; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            small = large; 
            large = arr[i]; 
        } else if (arr[i] > small)
            if(arr[i] !== large) {
            small= arr[i]; 
        }
    }
    if(small===0){
        return false;
    }
    return small;
}
console.log(secondlarge([10, 40, 30, 20, 50])); 
console.log(secondlarge([25, 143, 89, 13, 105]));
console.log(secondlarge([54, 23, 11, 17, 10])); 
console.log(secondlarge([23,3,52,6,7]));
