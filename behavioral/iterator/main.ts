export interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

 interface Aggregator {
     createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number> {
    private collection: Number[];
    private position: number = 0;

    constructor(collection: Number[]) {
        this.collection = collection;
    }

    public next(): Number {

        const result = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

class Numbers implements Aggregator {
    private collection: number[] = [];

    constructor(collection: number[]) {
        this.collection = collection;
    }
    public createIterator(): Iterator<Number> {
        return new ConcreteIterator(this.collection);
    }
}

const nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65],
    numbers: Numbers = new Numbers(nArray),
    it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

while (it.hasNext()) {
    console.log(it.next());
}