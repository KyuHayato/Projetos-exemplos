class Produto {
    //criar atributos privados
    #nome;
    #preco;
    #quantidade;
    //criar o contrutor
    constructor(nome, preco = 0.0, quantidade) {
        this.#nome = nome;
        this.#preco = preco;
        this.#quantidade = quantidade;
    }
    //get e sets de cada atributo
    get preco(){
        return this.#preco;
    }
    set preco(novoValor) {
        this.#preco = novoValor;
    }
    get quantidade() {
        return this.#quantidade;
    }
    set quantidade(novoValor) {
        this.#quantidade = novoValor;
    }
    get nome() {
        return this.#nome;
    }
    set nome(novoValor) {
        if (typeof(novoValor)  == 'string') {
            this.#nome = novoValor;
        } else {
            console.error("Tipo de dado invalido");
        }
    }
    funcaoPolimorfica() {
        throw new Error("Só implementar na classe filha");
    }
    desconto() {
        this.preco = this.preco * 0.9;
    }

}
class NovaClasse extends Produto{
    #novoValor
    constructor(nome, preco = 0.0, quantidade, novoValor) {
        super(nome, preco, quantidade)
        this.#novoValor = novoValor
    }
    get novoValor() {
        return this.#novoValor
    }
    set novoValor(valorNovo) {
        this.#novoValor = valorNovo
    }
    funcaoPolimorfica() {
        console.log("Função polimórfica")
    }
}
const produto1 = new Produto('Notebook', 1500.00);
const novaclasse = new NovaClasse('Notebook', 1500.00, 23, "Olá")
// const produto2 = new Produto('Caneta');
produto1.desconto()
console.log(produto1.preco);
novaclasse.funcaoPolimorfica()

// console.log(produto1.preco); // 1500.00
// console.log(produto2.preco); // 0.0
