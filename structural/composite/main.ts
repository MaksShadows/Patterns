 interface Car {
    getOperation(): void;
}

class CompositeCAr implements Car {

    private list: Car[];
    private itemCar: String;

    constructor(itemCar: String) {
        this.list = [];
        this.itemCar = itemCar;
    }

    public getOperation(): void {
        console.log("Create of ", this.itemCar)
        for (var i = 0; i < this.list.length; i += 1) {
            this.list[i].getOperation();
        }
    }

    public add(carElem: Car): void {
        this.list.push(carElem);
    }

    public remove(item: number): void {
        if (this.list.length <= item) {
            throw new Error("index out of bound!");
        }
        this.list.splice(item, 1);
    }
}

 class LeafCar implements Car {
     private itemCar: String;
     constructor(itemCar: String) {
         this.itemCar= itemCar;
    }
    public getOperation(): void {
        console.log("create of LeafCar", this.itemCar, " is called.");
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

composite1.getOperation();
composite2.getOperation();