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

