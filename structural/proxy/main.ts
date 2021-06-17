interface Object {
   getRequest(): void
}

 class ProxyCode implements Object {

     enormousData: number[]
     realSubject: RealObject

     constructor() {
         this.enormousData = []
         this.realSubject = new RealObject()
     }
    getRequest() {
         if (this.enormousData.length === 0) {
             console.log('pulling data from RealObject')
             this.enormousData = this.realSubject.getRequest()
             return this.enormousData
         }
         console.log('pulling data from Proxy cache')
         return this.enormousData
     }
}

 class RealObject implements Object {
     enormousData: number[]

     constructor() {
         this.enormousData = [1, 2, 3]
     }

     getRequest() {
         return this.enormousData
     }
}

let proxy1: ProxyCode = new ProxyCode();

// Use  RealObject
console.log(proxy1.getRequest());
// Use Proxy cache
console.log(proxy1.getRequest());



