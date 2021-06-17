abstract class Coffee {
    public description: string;

    public getDescription(): string {
        return this.description;
    };

    public abstract getCost(): number;
}

abstract class CoffeeDecorator extends Coffee {
    decoratedCoffee: Coffee;
    public abstract getDescription(): string;
}


class Espresso extends Coffee {
    public description = "Espresso";

    public getCost(): number {
        return 1.99;
    }
}

class Americano extends Coffee {
    public description = "Americano";

    public getCost(): number {
        return 2.99
    }
}


class Sugar extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost() + 0.20;
    }
}

class Milk extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }

    public getCost(): number {
        return this.decoratedCoffee.getCost() + 0.20;
    }
}

// ------------------------------ Make our coffee! ------------------------------
let coffee = new Espresso();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);

console.log(coffee.getCost());
console.log(coffee.getDescription());