interface WorkoutStrategy {
    run(): void;
    stop?(): void;
}

class Running implements WorkoutStrategy {
    public run(): void {
        console.log('Running')
    }
}

class Basketball implements WorkoutStrategy {
    public run(): void {
        console.log('Basketball')
    }
}

class Swimming implements WorkoutStrategy {
    public run(): void {
        console.log('Swimming')
    }
}

class Person {
    public strategy: WorkoutStrategy;
    public name: String;
    constructor(name: string, strategy: WorkoutStrategy) {
        this.name = name;
        this.strategy = strategy
    }

    workout(): void {
        console.log(`${this.name} starts:`)
        this.strategy.run();
    };
}

const user = new Person('Tom', new Running())
user.workout()