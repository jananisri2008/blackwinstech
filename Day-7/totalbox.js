/*Total Volume of All Boxes
Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

Examples
totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

totalVolume([1, 1, 1]) ➞ 1
Notes
You will be given at least one box.
Each box will always have three dimensions included. */

function totalbox(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        let box=arr[i];
        let calc=box[0]*box[1]*box[2];
        total+=calc;
    }
    return total;
}
console.log(totalbox([[2,3,2],[6,6,7],[1,2,1]]));
console.log(totalbox([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]]));
