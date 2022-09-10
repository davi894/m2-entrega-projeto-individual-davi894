import { Api } from "./../API/api.js"

class Funcionarios {

    static functionEditandoFuncionario() {

        const body = document.querySelector("body")

        const btnEditarDados = document.querySelector("#funcionario__btn__EditarDados")

        btnEditarDados.addEventListener("click", (e) => {

            const section = document.createElement("section")
            section.classList.add("funcionario__section")

            const labelNome = document.createElement("label")
            labelNome.innerText = "Nome"
            const inputUsername = document.createElement("input")

            const labelEmail = document.createElement("label")
            labelEmail.innerText = "Email"
            const inputEmail = document.createElement("input")

            const labelPassword = document.createElement("label")
            labelPassword.innerText = "Senha"
            const inputPassword = document.createElement("input")

            const sairModal = document.createElement("span")
            sairModal.innerText = "X"
            sairModal.classList.add("funcionario__sairModal")

            const btnEnviarDadosAtualizados = document.createElement("button")
            btnEnviarDadosAtualizados.innerText = "Enviar"

            section.append(labelNome, inputUsername, labelEmail, inputEmail, labelPassword, inputPassword, btnEnviarDadosAtualizados, sairModal)
            body.appendChild(section)
            btnEnviarDadosAtualizados.addEventListener("click", async (e) => {
                const body = {
                    username: inputUsername.value,
                    email: inputEmail.value,
                    password: inputPassword.value
                }
                console.log(body)
                await Api.funcionariosEditandoPropriosdados(body)
            })

            sairModal.addEventListener("click", (e) => {
                console.log(e.target)
                const modal = document.querySelector("section")
                modal.parentNode.removeChild(modal)
            })
        })

    }

    static async funcioanriosDoMesmoDepartemnto() {
        const FuncioanriosMesmoDepratemento = await Api.ListarosDepartamentosdaempresadofuncionáriologado()

        FuncioanriosMesmoDepratemento.forEach((elm) => {

            const li = document.createElement("li")
        })

        /*  {
             "uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8",
                 "name": "Nerd lab",
                     "opening_hours": "09:00",
                         "description": "Criamos um site rapidão pra você",
                             "sector_uuid": "17247c6b-5205-4067-9695-278fcb97d592",
                                 "departments": [
                                     {
                                         "uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980",
                                         "name": "TI",
                                         "description": "Departamento de TI",
                                         "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8"
                                     },
                                     {
                                         "uuid": "09b216d6-6f25-4ad6-89f4-6eece6602feb",
                                         "name": "RH",
                                         "description": "Recrutamento e seleção",
                                         "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8"
                                     }
                                 ]
         } */

    }

    static async listarColegasDoMesmoDepartamento() {

        const colegasDepratamento = await Api.listartodosOsFuncionariosDoDepartamentoDoFuncionario()
        console.log(await colegasDepratamento)


        /* {
           "uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980",
               "name": "TI",
                   "description": "Departamento de TI",
                       "company_uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8",
                           "users": [
                               {
                                   "uuid": "0212ff4a-94de-4c97-8fbf-e7e4bb06e258",
                                   "username": "Teste",
                                   "email": "mail@mail.com",
                                   "password": "$2a$08$YijK0p9TBsDW9UIyc3NPjuoFzHq3/WGUWXTp/SlNeEWCITWpYqLwO",
                                   "professional_level": "sênior",
                                   "kind_of_work": null,
                                   "is_admin": false,
                                   "department_uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980"
                               }
                           ]
       } */
    }
}
Funcionarios.functionEditandoFuncionario()
Funcionarios.funcioanriosDoMesmoDepartemnto()
Funcionarios.listarColegasDoMesmoDepartamento()
