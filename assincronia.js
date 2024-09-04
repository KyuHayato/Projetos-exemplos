import fs from 'fs'

console.log(1)

let callback = (err, contents) => {
    console.log("Conteudo lido", String(contents))
}
fs.readFile('./texto.txt', callback)

console.log(2)

console.log(3)
