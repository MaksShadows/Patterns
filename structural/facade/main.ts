// The Facade pattern

class ClassA {
    method1(): string {
        return 'A'
    }
}

class ClassB {
    method2(value: string): string {
        return value
    }
}

class ClassC {
    method3(value: { C: number[] }): { C: number[] } {
        return value
    }
}


class Facade {

    itemClassA(): string {
        return new ClassA().method1()
    }

    itemClassB(value: string): string {
        return new ClassB().method2(value)
    }

    itemClassC(value: { C: number[] }): { C: number[] } {
        return new ClassC().method3(value)
    }
}


// using
const facade = new Facade()
console.log(facade.itemClassA());
console.log(facade.itemClassB('B'));
console.log(facade.itemClassC({ C: [1, 2, 3] }));

console.log(new ClassA().method1());
console.log(new ClassB().method2('B'));
console.log(new ClassC().method3({ C: [1, 2, 3] }));





