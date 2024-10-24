/*Create a method in the Person class which returns how another person's age compares. 
Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."
p2.compareAge(p1) ➞ "Samuel is younger than me."
p1.compareAge(p3) ➞ "Lily is the same age as me." */
function olderthanme(name,age){
    return{
        name:name,
        age:age,
        compare:function(persondetails){
            if(this.age>persondetails.age)
                {
                    return '${persondetails.name}is younger than me';
                }
                else if(this.age<persondetails.age)
                {
                    return '${persondetails.name}is older than me';
                }
                else{
                    return '${persondetails.name}is the same age as me';
                    
                }

        }

    };
   
}
let p1=olderthanme("samuel",24);
let p2=olderthanme("joel",36);
let p3=olderthanme("lily",24);
console.log(p1.compare(p2));
console.log(p2.compare(p1));
console.log(p1.compare(p3));

