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

// class Book {
//     constructor(title, author, rating) {
//         this.title = title;
//         this.author = author; 
//         this.rating = rating;
//     }
//     isGood() {
//         if (this.rating >= 7) {
//             return true

//         }
//     }
// }

// let novela = new Book("Becoming Michelle Obama", "Michelle Obama", 10)
// let novel = new Book("Shoe Dog", "Phil Knight", 9)
// let nove = new Book("The Fault in Our Stars", "John Green", 6)
// let no = new Book("True Blood", "Charlaine Harris", 5)

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7

// console.log(novela.isGood());

// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.

class Dog {
    constructor(name, breed, mood, hungry) {
        this.name = name;
        this.breed = breed;
        this.mood = mood;
        this.hungry = hungry;
    }
    playFetch()  {
        this.hungry = false 
        this.mood = 'playful'
        return 'Ruff!'
    }
    feed() {
        if (this.hungry === false) {
            console.log("Woof!")
        } else {
            console.log("The dog doesn't look hungry")
        }
    }
    toString() {
        return this.name + "is a " + this.breed + " and she is " + this.hungry + "and" + this.mood;
    }
}

    let wolf = new Dog("Roxy", "Pitbull", "Loveable" , true)
    console.log(wolf.feed());
    // b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"

// d. Add a method called `toString` that returns a description of the dog: