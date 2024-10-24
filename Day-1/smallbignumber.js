/*Create a function that takes an array of numbers and return both the minimum and maximum numbers,
 in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
[23,3,52,6,7]
minMax([1]) ➞ [1, 1]
 */

function smallbignumber(arr){
    let max=arr[0];
    let min=arr[0];
   //console.log(max);
   //console.log(min);
        
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
return [max,min];
} 

console.log(smallbignumber([1,2,3,4,5]));
console.log(smallbignumber([23,3,52,6,7]));
console.log(smallbignumber([2334454, 5]));
console.log(smallbignumber([1]));