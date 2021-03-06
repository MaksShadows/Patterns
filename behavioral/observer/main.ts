// The Obsever Pattern

 class Subject {
    private observers: Observer[] = [];

    public register(observer: Observer): void {
        console.log(observer, "is pushed!");
        this.observers.push(observer);
    }

    public unregister(observer: Observer): void {
        let numitem: number = this.observers.indexOf(observer);
        console.log(observer, "is removed");
        this.observers.splice(numitem, 1);
    }

    public notify(): void {
        console.log("notify all the observers", this.observers);
        let index: number
            , max: number;

        for (index = 0, max = this.observers.length; index < max; index += 1) {
            this.observers[index].notify();
        }
    }
}

 class ConcreteSubject extends Subject {
    private subjectState: number;

    get SubjectState(): number {
        return this.subjectState;
    }

    set SubjectState(subjectState: number) {
        this.subjectState = subjectState;
    }
}

 class Observer {
    public notify(): void {  }
}

 class ConcreteObserver extends Observer {
    private name: string;
    private state: number;
    private subject: ConcreteSubject;

    constructor(subject: ConcreteSubject, name: string) {
        super();
        console.log("ConcreteObserver", name, "is created!");
        this.subject = subject;
        this.name = name;
    }

    public notify(): void {
        console.log("ConcreteObserver's notify method");
        this.state = this.subject.SubjectState;
        console.log(this.name, this.state);
    }

    get Subject(): ConcreteSubject {
        return this.subject;
    }

    set Subject(subject: ConcreteSubject) {
        this.subject = subject;
    }
}



const sub: ConcreteSubject = new ConcreteSubject();

sub.register(new ConcreteObserver(sub, "user1"));
sub.register(new ConcreteObserver(sub, "user2"));
sub.register(new ConcreteObserver(sub, "user3"));

sub.SubjectState = 125;
sub.notify();