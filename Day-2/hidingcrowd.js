/*A word is on the loose and now has tried to hide amongst a crowd of tall letters! 
Help write a function to detect what the word is, knowing the following rules:
The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, 
but their letters remain in the same order.

Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
 */
function hidingcrowd(str){
    let letter='';
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i].toLowerCase()){
           letter+=str[i];
        }
    }
return letter;
}
console.log(hidingcrowd("UcUNFYGaFYFYGtNUH"));
console.log(hidingcrowd("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(hidingcrowd("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
