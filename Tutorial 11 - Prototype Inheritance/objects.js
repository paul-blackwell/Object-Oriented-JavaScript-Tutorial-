function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function () {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args) {
    User.apply(this, args);
    this.role = 'super admin';
}


// Inherit from User
Admin.prototype = Object.create(User.prototype);

// Add deleteUser method to Admin (but not User)
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email !== u.email;
    });
}


var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'Shawn');

var users = [userOne, userTwo, admin];

