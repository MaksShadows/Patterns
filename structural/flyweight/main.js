/**

 * Паттерн ПРИСПОСОБЛЕНЕЦ/ЛЕГКОВЕС -  структурный шаблон проектирования, при котором объект, представляющий себя как
 * уникальный экземпляр в разных местах программы, по факту не является таковым.
 * Данный паттерн проектирования позволяет вместить большее количество объектов в отведённую оперативную память.
 * Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в
 * каждом объекте.
 * Шаблон Приспособленец сводит к минимуму использование памяти или вычислительные расходы, разделяя одни данные между
 * множеством подобных объектов.
 * Работает примерно как синглтон: помещает все создаваемые обьекты в один массив и следить чтобы значения массива были
 * уникальными, не повторялись. Т.е. может быть [1,2,3], но НЕ может быть [1,1,1,2].
 *
 */


// flyweight class
class Icecream {
    constructor(flavour, price) {
        this.flavour = flavour;
        this.price = price;
    }
}

// factory for flyweight objects
class IcecreamFactory {
    constructor() {
        this._icecreams = [];
    }

    createIcecream(flavour, price) {
        let icecream = this.getIcecream(flavour);
        if (icecream) {
            return icecream;
        } else {
            const newIcecream = new Icecream(flavour, price);
            this._icecreams.push(newIcecream);
            return newIcecream;
        }
    }

    getIcecream(flavour) {
        return this._icecreams.find(icecream => icecream.flavour === flavour);
    }
}

// usage
const factory = new IcecreamFactory();

const chocoVanilla = factory.createIcecream('chocolate and vanilla', 15);
const strawberry = factory.createIcecream('strawberry', 10);


console.log(factory._icecreams);
