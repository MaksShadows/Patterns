class Notebook {
    constructor(brand, years, price, model) {
        this.brand = brand;
        this.years = years;
        this.price = price;
        this.model = model;
    }
}

class NotebookBuilder {
    constructor(brand) {
        this.brand = brand;
    }
    setYears(years) {
        this.years = years;
        return this
    }
    setPrice(price) {
        this.price = price;
        return this;
    }
    setModels(model) {
        this.model = model;
        return this;
    }
    build() {
        return new Notebook(this.brand, this.years, this.price, this.model)
    }
}

const myNotebook1 = new NotebookBuilder('MacBook')
    .setYears(2020)
    .setPrice(2800)
    .setModels('Pro')
    .build()

console.log(myNotebook1)

const myNotebook2 = new NotebookBuilder('MacBook')
    .setYears(2019)
    .setPrice(1800)
    .setModels('Air')
    .build()

console.log(myNotebook2)

// const myNotebook3 = new NotebookBuilder('Xiomi', 'Pro')
//     .setYears(2019)
//     .setPrice(1500)
//     .build()

// console.log(myNotebook3)

// class Wallet {

//     constructor(balance, deposit, withdraw) {
//         this.balance = balance;
//         this.deposit = deposit;
//         this.withdraw = withdraw;
//     }
// }

// class WalletBuilder {
//     constructor(balance) {
//         this.balance = balance;
//     }

//     addDeposit(value) {
//         this.balance += value;
//         return this;
//     }

//     setWithdraw(value) {
//         if (value > this.balance) {
//             console.log("No enough money");
//             return this;
//         }
//         this.balance -= value;
//         return this;
//     }

//     build() {
//         return new WalletBuilder(this.balance, this.deposit, this.withdraw, this.check);
//     }
// }

// const myBalance = new WalletBuilder(0)
//     .addDeposit(1000)
//     .setWithdraw(1500)
//     .build();

// console.log(myBalance);