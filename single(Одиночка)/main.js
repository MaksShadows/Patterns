class User {
    constructor(name, age) {
        if (User._instance) {
            return User._instance;
        }
        this._name = name;
        this._age = age;
        User._instance = this;
        return this;
    }

    getUser() {
        return this._name + this._age;
    }
}

const myNAme = new User('Maks ', 26)
console.log(myNAme.getUser());

const myNAme2 = new User('Aleks ', 30)
console.log(myNAme2.getUser());