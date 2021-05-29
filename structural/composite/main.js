class Composite {
    constructor(name, price) {
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

class Car extends Composite {
    constructor(name) {
        super();
        this.name = name;
        this.equipments = [];
    }

    getName(name) {
        let unitsName = this.equipments
            .map(item => item.getName(name) + "\n")
            .join("");

        return `${this.name}: {\n${unitsName}}`;
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


const sportCar = new Car('Спортивный автомобиль');
const premiumCar = new Car('Премиум автомобиль');

const car1 = new Composite('Audi', 2000000);
const car2 = new Composite('BMW', 2500000);
const car3 = new Composite('Porsche', 3500000);
const car4 = new Composite('Lexuc', 2800000);


sportCar.add(car2);
sportCar.add(car3);

premiumCar.add(car1)
premiumCar.add(car4)


console.log(sportCar.getName("") + premiumCar.getName());
console.log("Общая сумма: $" + sportCar.getPrice());
