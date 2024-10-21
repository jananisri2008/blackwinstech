/*Create a function that accepts a string, checks if it's a valid email address and 
returns either true or false, depending on the evaluation.

The string must contain an @ character.
The string must contain a . character.
The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
If the string passes these tests, it's considered a valid email address.

Examples
validateEmail("@gmail.com") ➞ false
validateEmail("hello.gmail@com") ➞ false
validateEmail("gmail") ➞ false
validateEmail("hello@gmail") ➞ false
validateEmail("hello@edabit.com") ➞ true
 */
function email(email) {
    let aValue = -1;
    let dValue = -1;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            aValue = i;
        }
        if (email[i] === '.') {
            dValue = i;
        }
    }
    if (aValue === -1) {
        return false; 
    } else {
        if (dValue === -1) {
            return false; 
        } else {
            if (aValue > 0) { 
                if (dValue > aValue + 1) { 
                    if (dValue < email.length - 1) { 
                        return true; 
                    } else {
                        return false; 
                    }
                } else {
                    return false; 
                }
            } else {
                return false; 
            }
        }
    }
}
console.log(email("@gmail.com"));            
console.log(email("hello.gmail@com"));       
console.log(email("gmail"));                 
console.log(email("hello@gmail"));           
console.log(email("hello@edabit.com"));     

/*output
false
false
false
true*/
