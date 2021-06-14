interface MobileCharging {
    connectWithCable(): void;
}

class Android {
    insert(): void { console.log("Using micro USB...") }
}


class Iphone {
    insert(): void { console.log("Using micro USB type c...") }
}


class AdapterReader implements MobileCharging {
    mobileCabel: Android;

    constructor(mobileCabel: Android) {
        this.mobileCabel = mobileCabel;
    }

    connectWithCable() {
        this.mobileCabel.insert();
    }
}

// Используем адаптер
const item1 = new Android();
const mobcabel = new AdapterReader(item1);
// считуем данные
mobcabel.connectWithCable();