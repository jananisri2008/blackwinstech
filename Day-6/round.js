/*Given an array of cities and populations, return an array where all populations are rounded to 
the nearest million.

Examples
millionsRounding([
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
])
[
  ["Nice", 1000000],
  ["Abu Dhabi", 1000000],
  ["Naples", 2000000],
  ["Vatican City", 0]
]
Notes
Round down to 0 if a population is below 500,000. */
function round(city) {
    let roundcity = []; 
    for (let i = 0; i < city.length; i++) {
        let [name, totalpop] = city[i]; 
        let result = Math.round(totalpop / 1000000) * 1000000; 

        if (result < 500000) {
            result = 0; 
        }
        roundcity.push([name, result]); 
    }
    return roundcity; 
}
let citydata = [
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
];
console.log(round(citydata));
