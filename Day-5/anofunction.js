/*Write a function that returns an anonymous function, which adds n to its input

Examples
adds1 = addsNum(1)
adds1(3) ➞ 4
adds1(5.7) ➞ 6.7

adds10 = addsNum(10)
adds10(44) ➞ 54
adds10(20) ➞ 30
 */
/*function anofunction(num){
    return function(a){
        return num+a;
    }
}
let add1=anofunction(1);
console.log(add1(3));
console.log(add1(5.7));

let add10=anofunction(10);
console.log(add10(44));
console.log(add10(20));

let sub3=anofunction(3);
console.log(sub3(10));
console.log(sub3(15));
*/

function anofunction(num,operators){
    return function(a){
        if(operators==='add'){
            return num+a;
        }
        else if(operators==='sub'){
        return a-num;
        }
        else if(operators==='mul'){
            return a*num;
        }
    }
}
let add1=anofunction(1,'add');
console.log(add1(3));
console.log(add1(5.7));

let sub10=anofunction(10,'sub');
console.log(sub10(44));
console.log(sub10(20));

let mul3=anofunction(3,'mul');
console.log(mul3(10));
console.log(mul3(15));
