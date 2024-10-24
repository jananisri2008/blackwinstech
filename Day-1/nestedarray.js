/*Check if One Array can be Nested in Another*/

/*Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false
 */
/*var array1 = [1, 2, 3, 4];
var array2 = [0, 6];*/
//result = false
function arrayComparsion(array1,array2){
    let count=0;
    for(var i=0;i<=array1.length;i++){
        let j=0;
        while(j<=array2.length){
            if (array1[i] != undefined){
               if(array1[i] === array2[j]){
                console.log(array1[i], array2[j])
                count=count+1;
               }
            }
            j++;
        }
    }
    if(count > 0){
        console.log("False");
    }else{
        console.log("True");
    }
}
console.log(arrayComparsion([1,2,3,4],[0,6]));
console.log(arrayComparsion([3, 1], [4, 0]));
console.log(arrayComparsion([9, 9, 8], [8, 9]));
console.log(arrayComparsion([1, 2, 3, 4], [2, 3]));

