const vehicle = {

    move() {
        console.log(`${this.name} is moving and lifting anchor up`);
    },
    stop() {
        console.log(`${this.name} stopped and lifting anchor down`);
    }
};

const ship1 = Object.create(vehicle, {
    name: {
        value: "Argo"
    }
});

const ship2 = Object.create(vehicle, {
    name: {
        value: "Avrora"
    }
});

console.log(ship1.__proto__ === vehicle)

ship1.move()
ship2.stop()