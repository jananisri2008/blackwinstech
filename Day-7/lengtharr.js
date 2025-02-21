/*Length of a Nested Array
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Examples
getLength([1, [2, 3]]) ➞ 3

getLength([1, [2, [3, 4]]]) ➞ 4

getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6

getLength([1, [2], 1, [2], 1]) ➞ 5
Notes
An empty array should return 0. */

function lengtharr(arr){
    let count=0;
    let emty=[];
    emty.push(arr);

    while(emty.length>0){
        let last=emty[emty.length-1];
        emty.length=emty.length-1;

        if(Array.isArray(last)){
            for(let i=0;i<last.length;i++){
                emty.push(last[i]);
            }
        }
        else{
            count++;
        }
    }
    return count;
}
console.log(lengtharr([1,[2,3]]));
console.log(lengtharr([1,[2,[3,4]]]));