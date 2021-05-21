/*
Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе,
позволяя подклассам изменять тип создаваемых объектов.
Паттерн Фабричный метод предлагает создавать объекты не напрямую, используя оператор new, а через вызов особого фабричного метода.

В объектно - ориентированных языках этот шаблон помогает создавать экземпляры новых элементов с помощью методов генерации во вложенных классах.
Это помогает избежать упоминания определенных классов в родительском классе и полностью делегировать определение типа вложенным.
Более того, тип класса можно определить во время выполнения.
*/

class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
    }
}

function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        if (type === 'developer') member = new Developer(name)
        else if (type === 'tester') member = new Tester(name)
        return member;
    }
}

function say() {
    console.log(`${this.name} - ${this.type} `)
}

// creating objects

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Alex Sipmson", 'developer'))
members.push(factory.createMember("Tom Bond", 'developer'))
members.push(factory.createMember("Marc Weldman", 'tester'))
members.push(factory.createMember("Sammy Ranier", 'tester'))

members.forEach(function (x) {
    return say.call(x);
});