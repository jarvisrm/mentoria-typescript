/*Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = ()
employee.code = 10;
employee.name = "John";*/


//Resposta encontrada:
let employee: {code: number, name: string} = {
    code: 12,
    name: "James"
}

console.log(employee)

