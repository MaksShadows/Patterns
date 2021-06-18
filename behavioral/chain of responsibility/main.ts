// The Chain Of Responsibility Pattern Concept

interface Handler {

   gethandle(payload: number): number
}

class Successor1 implements Handler {
    // Concrete Handler
   gethandle(payload: number) {
        console.log(`Successor1 payload = ${payload}`)
        const test = Math.floor(Math.random() * 2) + 1
        if (test === 1) {
            payload += 1
            payload = new Successor1().gethandle(payload)
        } else {
            payload -= 1
            payload = new Successor2().gethandle(payload)
        }
        return payload
    }
}

class Successor2 implements Handler {
    //  Concrete Handler
   gethandle(payload: number) {
        console.log(`Successor2 payload = ${payload}`)
        const test = Math.floor(Math.random() * 3) + 1
        if (test === 1) {
            payload = payload * 2
            payload = new Successor1().gethandle(payload)
        } else if (test === 2) {
            payload = payload / 2
            payload = new Successor2().gethandle(payload)
        }
        return payload
    }
}



// The Client
const chain = new Successor1()
const item = 1
const result = chain.gethandle(item)
console.log(`Finished result = ${result}`)
