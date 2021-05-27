class MemberFactory {
    createMember(employeeType) {
        if (employeeType === 'FrondEnd Dedeloper') {
            return new Developer(employeeType);
        }
        if (employeeType === 'Tester engineer') {
            return new Tester(employeeType);
        }

        throw new Error('Такого типа не существует');
    }
}

class Worker {
    constructor(type, hourly) {
        this.type = type;
        this.hourly = hourly;
    }

    describe() {
        console.log(`Привет, я ${this.type} и моя ставка ${this.hourly}`);
    }
}

class Developer extends Worker {
    constructor(type) {
        const hourly = '1800$';
        super(type, hourly);
    }
}

class Tester extends Worker {
    constructor(type) {
        const hourly = '1000$';
        super(type, hourly);
    }
}


 const employees = [];
 const factory = new MemberFactory();
 employees.push(factory.createMember('FrondEnd Dedeloper'));
 employees.push(factory.createMember('Tester engineer'));
 employees.forEach((employee) => employee.describe());
