// The Command Pattern Concept

interface Command {
    getexecute(): void;
}


class Receive {
    action(): void {
        console.log('Receiver takes action');
    }
}

class LaunchCommand implements Command {
    private receiver: Receive;

    constructor(receiver: Receive) {
        this.receiver = receiver;
    }

    getexecute(): void {
        console.log('Launch!!!');
        this.receiver.action();
    }
}

class StopCommand implements Command {
    private receiver: Receive;

    constructor(receiver: Receive) {
        this.receiver = receiver;
    }

    getexecute(): void {
        console.log('Stop!!!');
        this.receiver.action();
    }
}

class  Invoker {
    private commands: Command[];

    constructor() {
        this.commands = [];
    }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    runCommand(command?: Command) {
        if (command) {
            this.commands.push(command);
        }
        const commandOnFire = this.commands.shift();
        commandOnFire.getexecute();
    }
}

let receiver = new Receive();

let launch = new LaunchCommand(receiver);
let stopCommand = new StopCommand(receiver);

let invoker = new Invoker();

invoker.addCommand(launch);
invoker.runCommand();

invoker.addCommand(stopCommand);
invoker.runCommand();