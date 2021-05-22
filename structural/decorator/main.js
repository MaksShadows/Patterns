/**
 *
 * ПАТТЕРН ДЕКОРАТОР (обертка)
 * Позволяет наделить обьект новыми возможностями не меняя первоначальный класс и не создавая дочерние классы
 * Принцип работы: декоратор помещает целевой обьект в обьект обертку, кот-й запускает базовое поведение обьекта,
 * а затем добавляет/отнимает что-то свое.
 *
 */

//Class presenting an Element base class

class Coffee {
    constructor(cost, description) {
        this.cost = cost;
        this.description = description;

    }
    getCost() {
        return this.cost
    }

    getDescription() {
        return this.description
    }
}


// Class presenting distance extend Decorator for Element base class


class StandartCoffee extends Coffee {
    cost = 10;

    getCost() {
        return this.cost
    }

    getDescription() {
        return 'Standart coffee'
    }
}


class MilkCoffee extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
    }
}


class VanillaCoffee extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 3
    }

    getDescription() {
        return this.coffee.getDescription() + ', vanilla'
    }
}


let someCoffee = new StandartCoffee()
console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)


someCoffee = new MilkCoffee(someCoffee)
console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)

someCoffee = new VanillaCoffee(someCoffee)
console.log(`Cумма: $${someCoffee.getCost()}  - ${someCoffee.getDescription()} `)
