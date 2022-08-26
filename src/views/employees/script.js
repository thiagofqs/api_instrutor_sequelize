const axios = require("axios")
const baseURL = "http://localhost:3333"

function getElements(data){
        data = {
        name: document.getElementById(/*coloca o id do HTML aqui*/),
        cpf: document.getElementById(/*coloca o id do HTML aqui*/),
        password: document.getElementById(/*coloca o id do HTML aqui*/),
        email: document.getElementById(/*coloca o id do HTML aqui*/),
        birthDate: document.getElementById(/*coloca o id do HTML aqui*/),
        cellPhone: document.getElementById(/*coloca o id do HTML aqui*/)
    }
    return data
}
function creatEmployee() {/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    const employee = null 
    getElements(employee)

    axios.post(`${baseURL}/register/employee`, employee)
    .then (console.log("Funcionou Hein!"))
    .catch(console.log(Error))
}

function listEmployees() {/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    axios.get(`${baseURL}/employees`)
    .then(console.log("ora ora se n deu certo msm"))
    .cathc(console.log(Error))
}

/* Ou Criar um Botão que redireciona pra outra pagina pra fazer cada get em htmls diferentes */

function listPerName(){/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    const employee = null
    getElements(employee)

    axios.get(`${baseURL}/search/name`,employee)
    .then(console.log("Ta Indo Hein!"))
    .cathc(console.log(Error))
}
function listPerCpF(){/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    const employee = null
    getElements(employee)

    axios.get(`${baseURL}/search/cpf`,employee)
    .then(console.log("Ta Indo Hein!"))
    .cathc(console.log(Error))
}
function deleteEmployee(){/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    const employee = null
    getElements(employee)

    axios.delete(`${baseURL}/delete/employee`,employee)
    .then(console.log("Ta Indo Hein!"))
    .cathc(console.log(Error))
}

function updateEmployee (){/*!!!!!!Atribuir a Funcão ao botao do HTML!!!!!*/
    const employee = null
    getElements(employee)

    axios.put(`${baseURL}/update/employee`, employee)
}