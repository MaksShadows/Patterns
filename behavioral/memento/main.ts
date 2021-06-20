//The Memento pattern
// tsc --target es6 main.ts

class Memento {
    field: string;

    constructor(field : string){
        this.field = field;
    }
}

class Originator {
    private field: string;

    constructor() {
        this.field = '';
    }

    public get state(): string {
        return this.field
    }

    public set state(value: string) {
        this.field = value
        console.log(`Originator: Set state to '${value}'`)
    }

    public get memento(): Memento {
        console.log(
            'Originator: Providing Memento of state to caretaker.'
        )
        return new Memento(this.field)
    }

    public set memento(value: Memento) {
        this.field = value.field
        console.log(
            `Originator: State after restoring from Memento: '${this.field }'`
        )
    }

}

class CareTaker {

    private originator: Originator
    private mementos: Memento[]

    constructor(originator: Originator) {
        this.originator = originator
        this.mementos = []
    }

    create() {
        console.log(
            'CareTaker: Getting a copy of Originators current state'
        )
        const memento = this.originator.memento
        this.mementos.push(memento)
    }

    restore(index: number) {
        console.log('CareTaker: Restoring Originators state from Memento')
        const memento = this.mementos[index]
        this.originator.memento = memento
    }

}

// The Client
const ORIGINATOR = new Originator()
const CARETAKER = new CareTaker(ORIGINATOR)

// originators state can change periodically due to application events
ORIGINATOR.state = 'State #1'
ORIGINATOR.state = 'State #2'

// lets backup the originators
CARETAKER.create()


