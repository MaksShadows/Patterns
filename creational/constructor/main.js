class Notebook {
    constructor() {
        this.brand = "";
        this.price = "";
        this.model = "";
        this.setting = false;
    }
}

class NotebookBuilder {
    constructor() {
        this.notebook = new Notebook();
    }

    getBrand(value) {
        this.notebook.brand = value;
        return this;
    }

    getModel(value) {
        this.notebook.model = value;
        return this;
    }

    getPrice(value) {
        this.notebook.price = value;
        return this;
    }

    getSetting(value) {
        this.notebook.setting = value;
        return this;
    }

    build() {
        return this.notebook;
    }
}

const myNotebook = new NotebookBuilder()
    .getBrand("MacBook")
    .getModel("Pro 16 2019")
    .getPrice("2500$")
    .getSetting(true)
    .build();

console.log(myNotebook);

// class Wallet {
//     constructor() {
//         this.balance = 0;
//         this.check = false;
//         this.completion = false;
//     }
// }

// class WalletBuilder {
//     constructor() {
//         this.wallet = new Wallet();
//     }

//     getBalance(value) {
//         this.wallet.balance = value;
//         return this;
//     }

//     getCheck(check) {
//         this.wallet.check = check;
//         return this;
//     }

//     getCompletion(completion) {
//         this.wallet.completion = completion;
//         return this;
//     }

//     addDeposit(value) {
//         this.wallet.balance += value;
//         return this;
//     }

//     withdraw(value) {
//         if (value > this.wallet.balance) {
//             console.log("No enough money");
//             return this;
//         }
//         this.wallet.balance -= value;
//         return this;
//     }

//     build() {
//         return this.wallet;
//     }
// }

// const myBalance = new WalletBuilder()
//     .getBalance(1500)
//     .addDeposit(0)
//     .withdraw(2000)
//     .getCheck(true)
//     .getCompletion(true)
//     .build();

// console.log(myBalance);