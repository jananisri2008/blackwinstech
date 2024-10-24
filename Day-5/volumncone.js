/*Volume of a Cone
Create a function that takes the height and radius of a cone as arguments and 
returns the volume of the cone rounded to the nearest hundredth.
Volume of a Cone Image

Examples
coneVolume(3, 2) ➞ 12.57
coneVolume(15, 6) ➞ 565.49
coneVolume(18, 0) ➞ 0*/
function volumncone(r,h){
    let cone=1/3;
    let pi=Math.PI;
    let sum= cone*pi*r*r*h;
    let result=Math.round(sum*100)/100;
    return result;
}
console.log(volumncone(3,2));
console.log(volumncone(15,6));
console.log(volumncone(18,0));
