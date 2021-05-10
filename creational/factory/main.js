class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}

function MemberFactory() {
    this.createMember = function (name, type) {
        let member;
        if (type === 'developer') member = new Developer(name)
        member.type = type;
        member.define = function () {
            console.log(`${this.name} - ${this.type} `)
        }
        return member;
    }
}

// creating objects

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Alex Sipmson", 'developer'))
members.push(factory.createMember("Tom Bond", 'developer'))


members.forEach(member => {
    member.define(); // method from our Factpry func
});