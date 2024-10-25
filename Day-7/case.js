/*Case and Index Inverter
Write a function that takes a string input and returns the string in a reversed case and order.

Examples
invert("dLROW YM sI HsEt") ➞ "TeSh iS my worlD"

invert("ytInIUgAsnOc") ➞ "CoNSaGuiNiTY"

invert("step on NO PETS") ➞ "step on NO PETS"

invert("XeLPMoC YTiReTXeD") ➞ "dExtErIty cOmplEx"
Notes
No empty strings and will neither contain special characters nor punctuation.
A recursive version of this challenge can be found via this link. */

function casestr(str){
    let empstr=" ";
    for(let i=str.length-1;i>=0;i--){
        let char=str[i];
        if(char===char.toUpperCase()){
            empstr+=char.toLowerCase();
        }
        else{
            empstr+=char.toUpperCase();
        }
    }
return empstr;
}
console.log(casestr("dLROW YM sI HsEt"));