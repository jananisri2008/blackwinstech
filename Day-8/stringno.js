/* */
function stringno(arr) {
    let result = [];    
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];         
        for (let j = 0; j < str.length; j++) {
            if (str[j] >= '0' && str[j] <= '9') {
                result.push(str); 
                break; 
            }
        }
    }
    return result;
}
console.log(stringno(["1a", "a", "2b", "b"])); 
console.log(stringno(["abc", "abc10"]));       
console.log(stringno(["abc", "ab10c", "a10bc", "bcd"])); 
console.log(stringno(["this is a test", "test1"])); 
