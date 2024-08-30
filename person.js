
export class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get age() {
        return this.#age;
    }

    set age(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log('Age must be a positive number.');
}
    }
}

const person = new Person('John', 30);
console.log(person.name); // John
person.name = 'Doe';
console.log(person.name); // Doe
console.log(person.age); // 30
person.age = -1; // Age must be a positive number.
console.log(person.age); // 30
person.age = 35;
console.log(person.age); // 35

export function teste() {
    console.log("Testando ")
}