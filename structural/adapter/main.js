var iPhone11 = /** @class */ (function () {
    function iPhone11() {
    }
    iPhone11.prototype.useUSBTYPEC = function () {
        console.log('Using micro USB type c...');
    };
    return iPhone11;
}());
var SamsungS20 = /** @class */ (function () {
    function SamsungS20() {
    }
    SamsungS20.prototype.useMicroUSB = function () {
        console.log('Using micro USB...');
    };
    return SamsungS20;
}());
// -----
var AdapterUSB = /** @class */ (function () {
    function AdapterUSB(iphone) {
        this.iphoneDevice = iphone;
    }
    AdapterUSB.prototype.useMicroUSB = function () {
        console.log('Want to use micro USB, converting...');
        this.iphoneDevice.useUSBTYPEC();
    };
    return AdapterUSB;
}());
var iphone = new iPhone11();
var chargeAdaptor = new AdapterUSB(iphone);
chargeAdaptor.useMicroUSB();
