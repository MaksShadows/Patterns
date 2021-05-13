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