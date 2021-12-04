class Car {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.year = 0000
    }

    honk() {
        console.log('BEEP BEEP!')
    }

    performMaintenance() {
        setTimeout(function() {
            console.log('maintenance complete')
        }, 3000)
    }
}