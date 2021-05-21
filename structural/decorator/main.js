class interface_Coffee {
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



class StandartCoffee extends interface_Coffee {
    cost = 10;

    getCost() {
        return this.cost
    }

    getDescription() {
        return 'Standart coffee'
    }
}



class MilkCoffee extends interface_Coffee {
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


class VanillaCoffee extends interface_Coffee {
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
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())


someCoffee = new VanillaCoffee(someCoffee)
console.log(someCoffee.getCost())
console.log(someCoffee.getDescription())

