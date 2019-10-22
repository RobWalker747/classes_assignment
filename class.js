// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.

// class Person {
//     constructor(firstName, middleName, lastName) {
//         this.firstName = firstName;
//         this.middleName = middleName;
//         this.lastName = lastName;    
//     }   
//     fullname() {
//         return this.firstName + " " + this.middleName + " " + this.lastName
//     }
// }

// let Shaun = new Person("Shaun", "Rick", "Thompson")
// let Jamie = new Person("Jamie", "Ann", "McKay")

// console.log(Jamie);
// console.log(Shaun);
// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.

// console.log(Jamie.fullname())
// console.log(Shaun.fullname())

// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.

class Book {
    constructor(title, author, rating) {
        this.title = title;
        this.author = author; 
        this.rating = rating;
    }
    isGood() {
        if (this.rating >= 7) {
            return true

        }
    }
}

let novela = new Book("Becoming Michelle Obama", "Michelle Obama", 10)
let novel = new Book("Shoe Dog", "Phil Knight", 9)
let nove = new Book("The Fault in Our Stars", "John Green", 6)
let no = new Book("True Blood", "Charlaine Harris", 5)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

console.log(novela.isGood());