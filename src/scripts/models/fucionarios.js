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

    static async listarDepartamentosdaEmpresaDoFuncionario() {
        const ulFuncionariosDoMesmoDepratamento = document.querySelector("#admin__listaFuncionarios")
        const FuncioanriosMesmoDepratemento = await Api.ListarosDepartamentosdaempresadofuncionáriologado()
        console.log(FuncioanriosMesmoDepratemento)
        FuncioanriosMesmoDepratemento.forEach(async (elm) => {

            console.log(elm)

            const li = document.createElement("li")

            const h2Descricao = document.createElement("h2")
            h2Descricao.innerText = elm.departments["description"]
            const h2Nome = document.createElement("h2")
            h2Nome.innerText = elm.departments["name"]
            li.append(h2Descricao, h2Nome)
            ulFuncionariosDoMesmoDepratamento.appendChild(li)
        })
    }

    static async listarColegasDoMesmoDepartamento() {

        const ulFuncionariosDoMesmoDepratamento = document.querySelector("#admin__listaFuncionarios")

        const colegasDepartamento = await Api.listartodosOsFuncionariosDoDepartamentoDoFuncionario()
        console.log(await colegasDepartamento)

        colegasDepartamento.forEach((elm) => {
            const li = document.createElement("li")

            const name = document.createElement("h2")
            name.innerText = elm.name
            const description = document.createElement("h2")
            description.innerText = elm.description
            const usersUsername = document.createElement("h2")
            usersUsername.innerText = elm.users["username"]
            const usersProfessional_level = document.createElement("h2")
            usersProfessional_level.innerText = elm.users["professional_level"]
            const userskind_of_work = document.createElement("h2")
            userskind_of_work.innerText = elm.users["kind_of_work"]

            li.append(name, description, usersUsername, usersProfessional_level, userskind_of_work)
            ulFuncionariosDoMesmoDepratamento.appendChild(li)
        })
    }
}
Funcionarios.functionEditandoFuncionario()
Funcionarios.listarDepartamentosdaEmpresaDoFuncionario()
Funcionarios.listarColegasDoMesmoDepartamento()
