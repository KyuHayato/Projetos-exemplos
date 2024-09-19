import Cadastro from "./cadastro";

let nome = document.querySelector("#nomeCadastro")
let email = document.querySelector("#loginCadastro")
let senha = document.querySelector("#senhaCadastro")
function cadastrar() {
    // alert(nome.value)
    // alert(email.value)
    // alert(senha.value)
    localStorage.setItem('username', nome.value);
    localStorage.setItem('userEmail', email.value);
    localStorage.setItem('userSenha', senha.value);
    console.log(localStorage.getItem('username'))
    console.log(localStorage.getItem('userEmail'))
    console.log(localStorage.getItem('userSenha'))
}
cadastrar()