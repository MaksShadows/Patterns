class Book {
    constructor(genre, author, name, years) {
        this.genre = genre;
        this.author = author;
        this.name = name;
        this.years = years;
    }

    clone = () => {
        console.log("Ваш выбор: " + this.genre + " " + this.author +
            " " + this.name + " " + this.years);
    }
}

class BookPrototype {
    constructor(proto) {
        this.proto = proto
    }

    clone = () => {
        const book = new Book();
        book.genre = proto.genre;
        book.author = proto.author;
        book.name = proto.name;
        book.years = proto.years;
        return book;

    }
}

const proto = new Book("Детектив", "Стивен Кинг", "Мистер Мерседес", "2020");
const prototype = new BookPrototype(proto);
const book = prototype.clone();
book.clone();