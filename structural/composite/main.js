class Car {
    getName() {}
    getPrice() {}
}

class CompositeCar extends Car {
    constructor(name, price) {
        super();
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

// Class presenting an item (Leaf) in composition

class LeafCar extends Car {
    constructor(name) {
        super();
        this.name = name;
        this.equipments = [];
    }

    getName(name) {
        let itemName = this.equipments
            .map(item => item.getName(name) + "\n")
            .join("");

        return `${this.name}: {\n${itemName}}`;
    }

    getPrice() {
        let price = 0;

        this.equipments.forEach((child) => price += child.getPrice());

        return price;
    }

    add(equipment) {
        this.equipments.push(equipment);
    }
}


const sportCar = new LeafCar('Спортивный автомобиль');
const premiumCar = new LeafCar('Премиум автомобиль');

const car1 = new CompositeCar('Audi', 2000000);
const car2 = new CompositeCar('BMW', 2500000);
const car3 = new CompositeCar('Porsche', 3500000);
const car4 = new CompositeCar('Lexuc', 2800000);


sportCar.add(car2);
sportCar.add(car3);

premiumCar.add(car1)
premiumCar.add(car4)


console.log(sportCar.getName("") + premiumCar.getName());
console.log("Общая сумма: $" + sportCar.getPrice());