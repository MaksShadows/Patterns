var Flyweight = /** @class */ (function () {
    function Flyweight(code) {
        this.code = code;
    }
    return Flyweight;
}());
var FlyweightFactory = /** @class */ (function () {
    function FlyweightFactory() {
    }
    FlyweightFactory.getFlyweight = function (code) {
        if (!(code in FlyweightFactory.flyweights)) {
            FlyweightFactory.flyweights[code] = new Flyweight(code);
        }
        return FlyweightFactory.flyweights[code];
    };
    FlyweightFactory.getCount = function () {
        return Object.keys(FlyweightFactory.flyweights).length;
    };
    // Creating the FlyweightFactory as a static class
    FlyweightFactory.flyweights = {};
    return FlyweightFactory;
}());
var AppContext = /** @class */ (function () {
    function AppContext(codes) {
        this.codes = [];
        for (var i = 0; i < codes.length; i++) {
            this.codes.push(codes.charCodeAt(i));
        }
    }
    AppContext.prototype.output = function () {
        // The context specific output that uses flyweights
        var ret = '';
        this.codes.forEach(function (c) {
            ret =
                ret +
                    String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
        });
        return ret;
    };
    return AppContext;
}());
// The Client
var APP_CONTEXT = new AppContext('abracadabra');
// use flyweights in a context
console.log(APP_CONTEXT.output());
console.log("abracadabra has " + 'abracadabra'.length + " letters");
console.log("FlyweightFactory has " + FlyweightFactory.getCount() + " flyweights");
