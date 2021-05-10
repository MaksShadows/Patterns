function Junior(cost) {
  this.type = 'Junior';
  this.cost = cost
}

function Midle(cost) {
  this.type = 'Midle';
  this.cost = cost
}

function Senior(cost) {
  this.type = 'Senior';
  this.cost = cost
}


function MemberFactory() {
  this.createMember = function (type, cost) {
    let member;
    if (type === 'junior') member = new Junior(type, cost)
    else if (type === 'midle') member = new Midle(type, cost)
    else if (type === 'senior') member = new Senior(type, cost)
    member.type = type;
    member.define = function () {
      console.log(`${this.type} : ${cost}`)
    }
    return member;
  }
}

// creating objects

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("junior", '1000$'));
members.push(factory.createMember("midle", '2500$'));
members.push(factory.createMember("senior", '3500$'));


members.forEach(member => {
  member.define(); // method from our Factpry func
});