// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;    
    }   
    fullname() {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

let Shaun = new Person("Shaun", "Rick", "Thompson")
let Jamie = new Person("Jamie", "Ann", "McKay")

console.log(Jamie);
console.log(Shaun);
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

console.log(Jamie.fullname())
console.log(Shaun.fullname())