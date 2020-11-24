/**
 * Classes in JavaScript are like blueprints
 * 
 * For example a class that describes a car would have
 * a color property and every car would have that property,
 * so we define those properties in our class for the car
 * "our blueprint for the car",. But we don't say what color 
 * the car is because that is specific to each individual instance 
 * of that class.
 */

class User {

    /**
     * The constructor function is the function that constructs our
     * objects or creates them, so when we say in the future that we want
     * to create a new user. The constructor function will be responsible for
     * actually creating that new user object based on this class.
     * This will fire when we want to create a new user object
     */
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

}


// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object, 
//   so we have access to that empty object via the "this" keyword
// - calls the constructor method

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
console.log(userTwo);