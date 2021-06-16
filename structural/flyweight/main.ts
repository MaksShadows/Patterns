 interface Flyweight {
    operation(s: String): void;
}

 class ConcreteFlyweight implements Flyweight {
    instrinsicState: String;

    constructor(instrinsicState: String) {
        this.instrinsicState = instrinsicState;
    }

    public operation(s: String): void {
        console.log("create of ConcreteFlyweight", s, " is being called!");
    }
}


export class FlyweightFactory {

    private fliesMap: { [s: string]: Flyweight; } = <any>{};

    constructor() { }

    public getFlyweight(key: string): Flyweight {

        if (this.fliesMap[key] === undefined || null) {
            this.fliesMap[key] = new ConcreteFlyweight(key);
        }
        return this.fliesMap[key];
    }
}


 const factory: FlyweightFactory   = new FlyweightFactory(),

 conc1  = <ConcreteFlyweight>factory.getFlyweight("conc1"),
 conc2  = <ConcreteFlyweight>factory.getFlyweight("conc2");

 conc1.operation("1");
 conc2.operation("2");