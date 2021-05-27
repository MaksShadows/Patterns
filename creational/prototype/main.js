
class BookPrototype  {

    constructor(genre, author, name, years) {
        super();
        this.genre = genre;
        this.author = author;
        this.name = name;
        this.years = years;
    }

    clone = () => {

        return new BookPrototype(this.genre, this.author, this.name, this.years)
    }
}

const proto = new BookPrototype("Детектив", "Стивен Кинг", "Мистер Мерседес", "2020");
const book = proto.clone();
console.log(book);
