 interface Car {
    operation(): void;
}

class CompositeCAr implements Car {

    private list: Car[];
    private s: String;

    constructor(s: String) {
        this.list = [];
        this.s = s;
    }

    public operation(): void {
        console.log("Create of ", this.s)
        for (var i = 0; i < this.list.length; i += 1) {
            this.list[i].operation();
        }
    }

    public add(c: Car): void {
        this.list.push(c);
    }

    public remove(i: number): void {
        if (this.list.length <= i) {
            throw new Error("index out of bound!");
        }
        this.list.splice(i, 1);
    }
}

 class LeafCar implements Car {
    private s: String;
    constructor(s: String) {
        this.s = s;
    }
    public operation(): void {
        console.log("create of LeafCar", this.s, " is called.");
    }
}


let leaf1 = new LeafCar("Porsche"),
    leaf2 = new LeafCar("Audi"),
    leaf3 = new LeafCar("BMW"),
    leaf4 = new LeafCar("Mercedes"),
    leaf5 = new LeafCar("Land Rover"),

    composite1 = new CompositeCAr("Спортивный автомобиль"),
    composite2 = new CompositeCAr("Премиум автомобиль");

composite1.add(leaf1);
composite1.add(leaf2);
composite1.add(leaf3);

composite1.remove(2);

composite2.add(leaf4);
composite2.add(leaf5);

composite1.operation();
composite2.operation();