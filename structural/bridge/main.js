/*
Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию
и реализацию, позволяя изменять их независимо друг от друга.

*/

class Pages {
    getContent() {
        throw new Error(`В ${this.constructor.name} не описан метод getContent()`)
    }
    setTheme() {
        throw new Error(`В ${this.constructor.name} не описан метод setTheme()`)
    }
}

class About extends Pages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

class Careers extends interface_Pages {
    constructor(theme) {
        super();
        this.theme = theme
    }

    getContent() {
        return "Careers page in " + this.theme.getColor()
    }
    setTheme(theme) {
        this.theme = theme
    }
}

//  Реализация
class DarkTheme {
    getColor() {
        return 'Dark Black'
    }
}

class LightTheme {
    getColor() {
        return 'Off white'
    }
}

class AquaTheme {
    getColor() {
        return 'Light blue'
    }
}


const darkTheme = new DarkTheme();
const lightTheme = new LightTheme;

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());

