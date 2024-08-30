// // let pessoa = {
// //    nome: ["Bob", "Smith"],
// //    idade: 32,
// //    sexo: "masculino",
// //    interesses: ["música", "esquiar"],
// //    endereço: {
// //       rua: "Rua ABC",
// //       número: 123,
// //       cidade: "São Paulo",
// //       estado: "SP"
// //       },
// //    bio: function () {
// //       console.log(
// //          this.nome[0] +
// //          " " +
// //          this.nome[1] +
// //          " tem " +
// //          this.idade +
// //          " anos de idade. Ele gosta de " +
// //          this.interesses[0] +
// //          " e " +
// //          this.interesses[1] +
// //          ".",
// //       );
// //    },
// //    saudacao: function () {
// //       console.log("Oi! Eu sou " + this.nome[0] + ".");
// //    },
// // };
// // console.log(pessoa)
// // pessoa["nome"]["primeiro"];
// class Teste{
//    constructor(nome, teste) {
//       this.nome = nome;
//       this.teste = teste;
//       this.testee = function () {
//       }
//    }
// }
// class Pessoa {
//    constructor(teste) {
//       // this.name = {
//       //    'first': first,
//       //    'last': last
//       // };
//       this.teste = new Teste();
//       this.age ="";
//       this.gender = "";
//       this.interests = "";
//       this.bio = function () {
//          return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
//       };
//       this.greeting = () => {
//          return 'Hi! I\'m ' + this.name.first + '.';
//       };
//    }
// }
// // let pessoa = new Pessoa("Kyu", "Hayato", 24, "masculino", ["LoL", "Animes", "Programação"])
// // let pessoa2 = new Pessoa("João", "da Silva", 33, "masculino", ["Futebol", "Cozinhar"])
// let test = new Teste("Ola")
// let pessoa3 = new Pessoa(test)
// // console.log(pessoa)
// // console.log(pessoa2)
// console.log(pessoa3)
// class Pessoa {
//    constructor(first, last, age = 10, gender, interests) {
//       this.name = {
//          'first': first,
//          'last': last
//       };
//       this.age = age;
//       this.gender = gender;
//       this.interests = interests;
//       this.bio = function () {
//          return this.name.first + ' ' +
//             this.name.last + ' is ' + this.age + ' years old. Helikes ' + this.interests[0] + ' and ' +
//          this.interests[1] + '.';
//       };
//       this.greeting = () => {
//          return 'Hi! I\'m ' + this.name.first + '.';
//       };
//    }
// }
// let p1 = new Pessoa()
// console.log(p1)
// let p2 = new Pessoa("Brenda", "Albuquerque")
// console.log(p2)
// // p2.interests = ["Séries", "Filmes"]
// // console.log(p2)
function createPerson(name, age) {
    let _name = name;
    let _age = age;

    return {
        getName: function () {
            return _name;
        },
        setName: function (newName) {
            _name = newName;
        },
        getAge: function () {
            return _age;
        },
        setAge: function (newAge) {
            _age = newAge;
        }
    };
}
const person = createPerson('John', 30);
console.log(person.getName()); // John

person.setName('Doe');
console.log(person.getName()); // Doe
