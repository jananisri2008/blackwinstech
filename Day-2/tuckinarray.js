/*Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
 */
function tuckarray(a,b){
    //let a=[1,10];
    //let b=[2,3,4,5,6,7,8,9];
    //let res=[a[0]].concat(b,a[1]);
    
return [a[0]].concat(b,a[1]);
}
console.log(tuckarray([1,10],[2,3,4,5,6,7,8,9]));
console.log(tuckarray([15,150], [45, 75, 35]));
console.log(tuckarray([[1, 2], [5, 6]], [[3, 4]]));

