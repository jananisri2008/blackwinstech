/*Create a function that takes a country's name and its area as arguments and
 returns the area of the country's proportion of the total world's landmass.

Examples
areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"
areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
Notes
The total world's landmass is 148,940,000 [Km^2]
Round the result to two decimal places. */
function getcountry(name,area){
    let total=148940000;
    let calc=(area/total)*100;
    let result=calc.toFixed(2);
    return `${name} is ${result}% of the total world's landmass`; 
}
console.log(getcountry("Russia",17098242));
console.log(getcountry("USA",9372610));
console.log(getcountry("Iran",1648195));
