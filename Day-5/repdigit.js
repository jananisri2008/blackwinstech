/*A repdigit is a positive number composed out of the same digit.
Create a function that takes an integer and returns whether it's a repdigit or not.

Examples
isRepdigit(66) ➞ true
isRepdigit(0) ➞ true
isRepdigit(-11) ➞ false */
function repdigit(num){
    if(num==0){
        return true;
    }   
    if(num<0)
        {
            return false;
        }
    while(num>0){
        let ld=num%10;
        let fd=Math.floor(num/10);
        if(ld==fd){
            return true;
        }
        else{
            return false;
        }
    }
}
console.log(repdigit(66));
console.log(repdigit(-20));
console.log(repdigit(-11));