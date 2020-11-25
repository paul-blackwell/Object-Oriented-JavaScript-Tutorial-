

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(this.email, 'just logged in');
        return this;
    }

    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score ++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }

}

class Admin extends User {

    /**
     *  When super is called inside a method, it will
     * call the method from the class it extends from,
     * in our case its calling it from the constructor
     * method from.
     */
    constructor(email, name, job) {
        super(email, name);
        this.job = job;
    }

    // Note: We will inherit the constructor from User, but we can add our own

    deleteUser(user){
        users = users.filter(u => {
            return u.email !== user.email;
        });
    }
    
}


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shawn', 'Admin');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);
console.log(users);
