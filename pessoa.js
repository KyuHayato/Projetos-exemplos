class Motor {
    ligar() {
        console.log('Motor ligado');

    }

    desligar() {
        console.log('Motor desligado');
    }
}

class Carro {
    constructor() {
        this.motor = new Motor();
    }

    ligarCarro() {
        this.motor.ligar();
    }

    desligarCarro() {
        this.motor.desligar();
    }
}

const carro = new Carro();
carro.ligarCarro(); // "Motor ligado"
carro.desligarCarro(); // "Motor desligado"