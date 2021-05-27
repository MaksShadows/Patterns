class CoffeeMachine {
    constructor() {
        this.state = {
            isOn: false,
            isHeated: false,
            isBusy: false
        };
        console.log('Create new coffee machine instance');
    }

    turnOn() {
        this.state.isOn = true;
        console.log('The machine turned on');
    }

    turnOff() {
        this.state.isOn = false;
        console.log('The machine turned off');
    }

    startHeating() {
        this.state.isBusy = true;
        this.state.isHeated = true;
        console.log('The machine is heated');
    }

    brewCoffee() {
        console.log('The coffee is ready!')
        this.state.isBusy = false;
        this.state.isHeated = false;
    }

    cleanMachine() {
        this.state.isBusy = true;
        console.log('Cleaning...');
        this.state.isBusy = false;
        console.log('Machine is clean now.')
    }

}

class CoffeeFacade {

    constructor(coffeeMachine) {
        this.coffeeMachine = coffeeMachine;
    }

    makeCoffee() {
        this.coffeeMachine.turnOn();
        this.coffeeMachine.startHeating();
        this.coffeeMachine.brewCoffee();
        this.coffeeMachine.cleanMachine();
        this.coffeeMachine.turnOff();
    }


    cleanMachine() {
        this.coffeeMachine.turnOn();
        this.coffeeMachine.startHeating();
        this.coffeeMachine.cleanMachine();
        this.coffeeMachine.turnOff();
    }
}


// Make coffee machine
const coffeeMachine = new CoffeeMachine();

// Make a facade for coffee machine (control panel with buttons: makeCoffee, cleanMachine)
const coffeeMachineFacade = new CoffeeFacade(coffeeMachine);

// Make coffee cup (1)
coffeeMachineFacade.makeCoffee();

// Make coffee machine cleanup (2)
coffeeMachineFacade.cleanMachine();