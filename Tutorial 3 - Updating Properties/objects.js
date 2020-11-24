

/**
 * Encapsulation is to enclose a mixture of something inside
 * a capsule so you can think of userOne as the capsule and the
 * mixture is all of the different properties inside that capsule
 */

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in'); // "this" refers to the object if it was out side of the object it would refer to the window object (the global object)
    },
    logout(){
        console.log(this.email, 'has logged out');
         
    }
};


userOne.name = 'Yoshi';
userOne['name'] = 'Yoshi';  // dose the same thing

console.log(userOne['email']); //  ryu@ninjas.com


var prop = 'name';
userOne[prop] // "Yoshi"

var prop = 'email';
userOne[prop] // "ryu@ninjas.com"


/**
 * We can also create new properties or methods
 */
userOne.age = 25;

/**
 *  Not a big fan of this should be kept inside the object literal definition,
 * so its all in one place 
 */
userOne.logInfo = function() {
    console.log(this.email, this.name, this.age);
}