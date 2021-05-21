/*
Адаптер — это структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместе.
*/

class UsersLanguageAdapter {
    constructor(lang = "en") {
        this.language = lang;

        this.languageMessages = {
            add: {
                en: "Added succefully",
                rus: "Добавлено успешно"
            },
            remove: {
                en: "Added succefully",
                rus: "Добавлено успешно"
            },
        };
    }

    setLanguage(lang = "en") {
        this.language = lang;
    }

    display(method) {
        console.log(this.languageMessages[method][this.language]);
    }
}

class Users {
    constructor(lang) {
        this.data = [];
        this.messages = new UsersLanguageAdapter(lang);
    }

    add(name) {
        this.data.push(name);
        this.messages.display("add");
        return true;
    }

    remove(name) {
        this.data = this.data.filter(currentName => name !== currentName);
        this.messages.display("remove");
        return true;
    }
}

  const user1 = new Users("rus");
  user1.add("Ricardo");

  user1.messages.setLanguage("en");

  user1.remove("Ricardo");
console.log(user1.add());