

/**
 * Encapsulation is to enclose a mixture of something inside
 * a capsule so you can think of userOne as the capsule and the
 * mixture is all of the different properties inside that capsule
 */

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in'); // this refers to the object if it was out side of the object it would refer to the window object (the global object)
    },
    logout(){
        console.log(this.email, 'has logged out');
         
    }
};

//console.log(userOne.name);

userOne.login() //  ryu@ninjas.com has logged in
userOne.logout() //  ryu@ninjas.com has logged out