class Animal {
    constructor(name) {
        this.name = name;
    }
    grunhir() {
        console.log("Animal Grunhindo")
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Chama o construtor da superclasse
        this.breed = breed;
    }
    speak() {
        console.log(`${this.name} barks`);
    }
}
class Cat extends Animal{
    
}

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak();
myDog.grunhir();// Rex barks