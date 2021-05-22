/*
Мост — это структурный паттерн проектирования, который разделяет один или несколько классов на две отдельные иерархии — абстракцию
и реализацию, позволяя изменять их независимо друг от друга.

*/

// Основная иерархия (абстракция)
class interface_Pages {
    getContent() {
        throw new Error(`В ${this.constructor.name} не описан метод getContent()`)
    }
    setTheme() {
        throw new Error(`В ${this.constructor.name} не описан метод setTheme()`)
    }
}

class About extends interface_Pages {
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

// Вспомогательная иерархия (реализация)
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


const darkTheme = new DarkTheme();
const lightTheme = new LightTheme;

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());

// about.setTheme(lightTheme); // динамически меняем темы
// careers.setTheme(lightTheme);