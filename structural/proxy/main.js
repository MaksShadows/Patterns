/*
Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов
специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать что-то до
или после передачи вызова оригиналу.
*/

class GeoCoder {
    getLatLng = (address) => {
        if (address === "Amsterdam") {
            return "52.3700° N, 4.8900° E"
        } else if (address === "London") {
            return "51.5171° N, 0.1062° W"
        } else if (address === "Paris") {
            return "48.8742° N, 2.3470° E"
        } else if (address === "Berlin") {
            return "52.5233° N, 13.4127° E"
        } else {
            return ""
        }
    }
}

class GeoProxy {
    constructor() {
        const geocoder = new GeoCoder()
        const geocache = {}
        return {
            getLatLng: (address) => {
                if (!geocache[address]) {
                    geocache[address] = geocoder.getLatLng(address)
                }
                console.log(address + ": " + geocache[address])
                return geocache[address]
            },
        }
    }
}

const geo = new GeoProxy();

// geolocation requests
geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Berlin");