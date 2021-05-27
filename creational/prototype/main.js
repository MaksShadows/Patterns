class Book {
    constructor() {}

    clone = () => {};
}

class BookPrototype extends Book {

    constructor(genre, author, name, years) {
        super();
        this.genre = genre;
        this.author = author;
        this.name = name;
        this.years = years;
    }

    clone = () => {

        return new BookPrototype(this.genre, this.author, this.name, this.years)
        // const book = new BookPrototype();
        // book.genre = proto.genre;
        // book.author = proto.author;
        // book.name = proto.name;
        // book.years = proto.years;
        // return book;

    }
}

const proto = new BookPrototype("Детектив", "Стивен Кинг", "Мистер Мерседес", "2020");
const book = proto.clone();
console.log(book);







// class Book {
//     constructor() {}
// }


// class BookPrototype extends Book {

//     constructor(genre, author, name, years) {
//         super();
//         this.genre = genre;
//         this.author = author;
//         this.name = name;
//         this.years = years;
//     }

//     clone = () => {
//         const book = new BookPrototype();
//         book.genre = proto.genre;
//         book.author = proto.author;
//         book.name = proto.name;
//         book.years = proto.years;
//         return book;

//     }
// }


// const proto = new BookPrototype("Детектив", "Стивен Кинг", "Мистер Мерседес", "2020");
// const book = proto.clone();
// console.log(book);



// class Book {
//     constructor() {}
// }


// class BookPrototype extends Book {

//     constructor() {
//         super();
//         this.genre = "Детектив";
//         this.author = "Стивен Кинг";
//         this.name = "Мистер Мерседес"
//         this.years = "2020";
//     }

//     clone = () => {
//         const book = new BookPrototype();
//         return book;

//     }
// }


// const proto = new BookPrototype();
// const book = proto.clone();
// console.log(book);