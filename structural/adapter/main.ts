interface IPhone {
    useUSBTYPEC();
}

interface Android {
    useMicroUSB();
}

class iPhone11 implements IPhone {
    useUSBTYPEC() {
        console.log('Using micro USB type c...');
    }
}

class SamsungS20 implements Android {
    useMicroUSB() {
        console.log('Using micro USB...');
    }
}

// -----
class AdapterUSB implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useUSBTYPEC();
    }
}

let iphone = new iPhone11();
let chargeAdaptor = new AdapterUSB(iphone);

chargeAdaptor.useMicroUSB();