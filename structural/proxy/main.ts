interface Object {
    doAction(): void;
}

 class ProxyCode implements Object {
    private realObject: RealObject;
    private s: string;

    constructor(s: string) {
        this.s = s;
    }

    public doAction(): void {
        console.log("`doAction` of Proxy(", this.s, ")");
        if (this.realObject === undefined) {
            console.log("creating a new RealSubject.");
            this.realObject = new RealObject(this.s);
        }
        this.realObject.doAction();
    }
}

 class RealObject implements Object {
    private s: string;

    constructor(s: string) {
        this.s = s;
    }
    public doAction(): void {
        console.log("`doAction` of RealSubject", this.s, "is being called!");
    }
}

let proxy1: ProxyCode = new ProxyCode("proxy1");

let proxy2: ProxyCode = new ProxyCode("proxy2");

proxy1.doAction();
proxy2.doAction();


