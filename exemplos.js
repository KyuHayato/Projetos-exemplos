class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} faz algum som.`;
    }
}

class Gato extends Animal {
    falar() {
        return `${this.nome} au au.`;
    }
}

const gato = new Gato('Tom');
console.log(gato.falar());
