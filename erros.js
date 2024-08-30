// try {
//     // Código que pode lançar um erro
//     let result = riskyFunction();
//     console.log(result);
// } catch (error) {
//     // Código para tratar o erro
//     console.error('Erro de referencia a função:', error.message);
// } finally {
//  console.log("Sempre sou executado ao final da operação")
// }

function checkAge(age) {

    if (typeof age === "string") {
       throw new Error('Coloque um valor válido, no caso um número.') 
    }else if (age < 18) {
        throw new Error('Idade deve ser maior ou igual a 18.');
    } else if(age  > 18 && age < 20) {
        throw new Error("Novo erro!")
    }
    return "Não teve erro!"
}

try {
    console.log(checkAge(25))
} catch (error) {
    console.error('Erro capturado:', error.message);
}