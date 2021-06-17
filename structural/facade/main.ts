class Computer  {

    turnOnPC(): void {
        console.log('The PC turned on')
    }

    showLoadingScreen(): void {
        console.log('Loading..')
    }

    ram(): void {
        console.log('Ready to be used!')
    }

    cpu(): void {
        console.log('Ready to be used!')
    }

    gpu(): void {
        console.log('Ready to be used!')
    }

    turnOffPC(): void {
        console.log('The PC turned off');
    }

}


class Mouse {
    turnOnMouse(): void {
        console.log('Mouse connect..');
    }

    turnOffMouse(): void {
        console.log('Mouse disable..');
    }
}

class Keyboard  {
    turnOnKeyboard(): void {
        console.log('Keyboard connect..');
    }

    turnOffKeyboard(): void {
        console.log('Keyboard disable..');
    }

}

// ----
class ComputerFacade {
    private pc:  Computer ;
    private mouse: Mouse;
    private keyboard: Keyboard;

    constructor(pc: Computer,  mouse: Mouse, keyboard: Keyboard) {
        this.pc = pc;
        this.mouse = mouse;
        this.keyboard = keyboard;
    }

    public turnOn() {

        this.pc.turnOnPC();
        this.pc.showLoadingScreen();
        this.pc.ram();
        this.pc.cpu();
        this.pc.gpu();

        this.keyboard.turnOnKeyboard();

        this.mouse.turnOnMouse();
    }

    public turnOff() {

        console.log('Computer shutdown started');

        this.pc.turnOffPC();

        this.keyboard.turnOffKeyboard();

        this.mouse.turnOffMouse();
    }

}

// Useing
let pc = new Computer();
let mouse = new Mouse();
let keyboard = new Keyboard();

let computer = new ComputerFacade(pc, mouse, keyboard);
computer.turnOn();
computer.turnOff();