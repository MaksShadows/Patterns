/*
Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру,
а затем работать с ней так, как будто это единичный объект. Паттерн Компоновщик имеет смысл только тогда, когда основная модель
вашей программы может быть структурирована в виде дерева.
*/


class Composite {
    constructor(compositeName) {
        this.children = [];
        this.compositeName = compositeName;
    }

    add(child) {
        this.children.push(child);
    }

    getPrice() {
        let price = 0;

        this.children.forEach((child) => price += child.getPrice());

        return price;
    }
}

// Class presenting an item (Leaf) in composition

class Leaf extends Composite {
    constructor(leafName, leafPrice) {
        super()
        this.leafName = leafName;
        this.leafPrice = leafPrice;
    }

    getPrice() {
        return this.leafPrice;
    }
}


const sportCar = new Composite('Спортивный автомобиль');
const sportSuspension = new Leaf('Спортивная подвеска', 50000);
const sportTransmission = new Leaf('Спортивная коробка передач', 100000);

sportCar.add(sportSuspension);
sportCar.add(sportTransmission);

console.log(`Общая сумма: $${sportCar.getPrice()}`);