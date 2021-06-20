// The Command Pattern Concept

interface Command {
    getexecute(): void
}

class Invoker {

    private commands: { [id: string]: Command }

    constructor() {
        this.commands = {}
    }

    register(commandName: string, command: Command) {

        this.commands[commandName] = command
    }

    getexecute(commandName: string) {

        if (commandName in this.commands) {
            this.commands[commandName].getexecute()
        } else {
            console.log(`Command [${commandName}] not recognised`)
        }
    }
}

class Receiver {

    runCommand1() {

        console.log('Executing Command 1')
    }

    runCommand2() {

        console.log('Executing Command 2')
    }
}

class Command1 implements Command {

    private  receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }

    getexecute() {
        this.receiver.runCommand1()
    }
}

class Command2 implements Command {

    private  receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }

    getexecute() {
        this.receiver.runCommand2()
    }
}


// Create a receiver
const RECEIVER = new Receiver()

// Create Commands
const COMMAND1 = new Command1(RECEIVER)
const COMMAND2 = new Command2(RECEIVER)

// Register the commands with the invoker
const INVOKER = new Invoker()
INVOKER.register('1', COMMAND1)
INVOKER.register('2', COMMAND2)

// Execute the commands that are registered on the Invoker
INVOKER.getexecute('1')
INVOKER.getexecute('2')
INVOKER.getexecute('1')
INVOKER.getexecute('2')