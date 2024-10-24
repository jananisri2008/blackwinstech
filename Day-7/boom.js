/*Seven Boom!
Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.
Notes
N/A */

function boom(arr){
    for(let i=0;i<arr.length;i++){
        let num=arr[i];
        while(num>0){
        if(num%10===7){
            return "Boom";
        }
        num=Math.floor(num/10);
    }
}
return "There is no 7 in array";
}
console.log(boom([1,2,3,4,5,6,7]));
console.log(boom([8,6,33,100]));
console.log(boom([2,55,66,97]));