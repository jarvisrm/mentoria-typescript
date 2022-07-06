// Como podemos melhorar esse código usando TS?

//Resposta encontrada:
enum Profissao {
    Atriz,
    Padeiro,
}

interface pessoas {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: pessoas = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: pessoas = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

let pessoa3: pessoas = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: pessoas = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)