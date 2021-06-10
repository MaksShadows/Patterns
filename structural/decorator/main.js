//Class presenting an Element base class

// class Coffee {
//     constructor(cost, description) {
//         this.cost = cost;
//         this.description = description;

//     }
//     getCost() {
//         return this.cost
//     }

//     getDescription() {
//         return this.description
//     }
// }


// // Class presenting distance extend Decorator for Element base class


// class StandartCoffee extends Coffee {
//     cost = 10;

//     getCost() {
//         return this.cost
//     }

//     getDescription() {
//         return 'Standart coffee'
//     }
// }


// class MilkCoffee extends Coffee {
//     constructor(coffee) {
//         super();
//         this.coffee = coffee
//     }

//     getCost() {
//         return this.coffee.getCost() + 2
//     }

//     getDescription() {
//         return this.coffee.getDescription() + ', milk'
//     }
// }


// class VanillaCoffee extends Coffee {
//     constructor(coffee) {
//         super();
//         this.coffee = coffee
//     }

//     getCost() {
//         return this.coffee.getCost() + 3
//     }

//     getDescription() {
//         return this.coffee.getDescription() + ', vanilla'
//     }
// }


// let someCoffee = new StandartCoffee()
// console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)


// someCoffee = new MilkCoffee(someCoffee)
// console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)

// someCoffee = new VanillaCoffee(someCoffee)
// console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)




class Name {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// abstract class
class NameDecorator {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.getName();
    }
}

class LowercaseNameDecorator extends NameDecorator {

    constructor(name) {
        super(name);
    }

    getName() {
        return this.name.getName().toLowerCase();
    }
}

class GamerTagNameDecorator extends NameDecorator {

    constructor(name) {
        super(name);
    }

    getName() {
        return `xX_${this.name.getName()}_Xx`;
    }
}

class LeetNameDecorator extends NameDecorator {

    constructor(name) {
        super(name);
    }

    getName() {
        return this.name.getName()
            .replace(/\s/gi, '_')
            .replace(/i/gi, '1')
            .replace(/e/gi, '3')
            .replace(/a/gi, '4')
            .replace(/o/gi, '0')
            .replace(/t/gi, '7');
    }
}

const name1 = new Name('Maks');
const name11 = new LowercaseNameDecorator(name1);

const name2 = new Name('Tom');
const name22 = new LeetNameDecorator(name2);

console.log(name11.getName());
console.log(name22.getName());


// class User {
//     constructor(name) {
//         this.name = name
//     }

//     say = () => {
//         console.log("User: " + this.name)
//     }
// }

// class DecoratedUser {

//     constructor(user, street, city) {
//         this.user = user
//         this.name = user.name // ensures interface stays the same
//         this.street = street
//         this.city = city
//     }
//     say = () => {
//         console.log("Decorated User: " + this.name + ", " +
//             this.street + ", " + this.city);
//     }
// }

// const user = new User("Kelly");
// user.say();

// const decorated = new DecoratedUser(user, "Broadway", "New York");
// decorated.say();


