// The Obsever Pattern

interface Subject {
    registerObserver(obj: Observer);
    removeObserver(obj: Observer);
    notifyObservers();
}

interface Observer {
    update(temperature: number);
}


class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number;

    registerObserver(obj: Observer) {
        this.observers.push(obj);
    }

    removeObserver(obj: Observer) {
        let index = this.observers.indexOf(obj);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temp: number) {
        console.log('WeatherStation: new temperature measurement: ' + temp);
        this.temperature = temp;
        this.notifyObservers();
    }
}


class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        console.log('TemperatureDisplay: I need to update my display');
    }
}

class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan: Its hot here, turning myself on...');
        } else {
            console.log('Fan: Its nice and cool, turning myself off...');
        }
    }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);


;