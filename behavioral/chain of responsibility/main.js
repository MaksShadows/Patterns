// The Chain Of Responsibility Pattern Concept
var Successor1 = /** @class */ (function () {
    function Successor1() {
    }
    // Concrete Handler
    Successor1.prototype.gethandle = function (payload) {
        console.log("Successor1 payload = " + payload);
        var test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload += 1;
            payload = new Successor1().gethandle(payload);
        }
        else {
            payload -= 1;
            payload = new Successor2().gethandle(payload);
        }
        return payload;
    };
    return Successor1;
}());
var Successor2 = /** @class */ (function () {
    function Successor2() {
    }
    //  Concrete Handler
    Successor2.prototype.gethandle = function (payload) {
        console.log("Successor2 payload = " + payload);
        var test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload = payload * 2;
            payload = new Successor1().gethandle(payload);
        }
        else if (test === 2) {
            payload = payload / 2;
            payload = new Successor2().gethandle(payload);
        }
        return payload;
    };
    return Successor2;
}());
// The Client
var chain = new Successor1();
var item = 1;
var result = chain.gethandle(item);
console.log("Finished result = " + result);
