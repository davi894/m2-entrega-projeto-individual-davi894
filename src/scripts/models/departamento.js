import { Api } from "../API/api.js"

Api.DeleterDepartament0()
Api.contratarFuncionario()
Api.demitirFuncionarios()
Api.listarTodosOsdepartamentosDeEmpresa()
Api.listarTodosOsdepartamentos()
Api.criarDepratamento()
Api.cadastrarEmpresa()


class Departamento {

    static rendrizaListartodososdepartamentos() {
        document.querySelector("#admin__ul__todosOsDepartamentos")



    }

    static rendrizaListarosTodososdepartamentosaempresa() {
        document.querySelector("#admin__ul__ListarTodosOsDepartamentosDaEmpresa")

    }


    static rendrizaCriarDepartamento() {
        const nome = document.querySelector("#admin_name__empresa")
        const descricao = document.querySelector("#admin_name__description")
        const uuid = document.querySelector("#admin_name__company_uuid")


        const btn = document.querySelector("#admin__CriarDepartamento")

        btn.addEventListener("click", (e) => {
            event.preventDefault()
            const body = {
                name: nome.value,
                description: descricao.value,
                company_uuid: uuid.value
            }
            console.log(body)
        })

    }


    static rendrizaContratar() {
        const uuidFunc = document.querySelector("#admin__uuidFuncionario")
        const uuidDep = document.querySelector("#admin__uuidDapartamento")

        const btn = document.querySelector("#admin__contratar")
        btn.addEventListener("click", (e) => {

            e.preventDefault()
            const body = {
                user_uuid: uuidFunc.value,
                department_uuid: uuidDep.value
            }
            console.log(body)
        })
    }


    static rendrizaDemitirFuncionário() {
        document.querySelector("#demitir")
        /* passar o id */
        const btn = document.querySelector("#admin__demitirFuncionario")
        btn.addEventListener("click", (e) => {
            e.preventDefault()
        })
    }


    static rendrizaEditarDepartamento() {
        const description = document.querySelector("#admin__departamento")

        const btn = document.querySelector("#admin__ediarDep")
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            const body = {
                description: description.value
            }
            console.log(body)
        })

    }


    static rendrizaDeletarDepartamento() {
        document.querySelector("#admin__deletarDepartamento")
        /* id do departamento */
        const btn = document.querySelector("#admin__deletarDep")
        btn.addEventListener("click", (e) => {
            e.preventDefault()
        })
    }


}

Departamento.rendrizaListartodososdepartamentos()
Departamento.rendrizaListarosTodososdepartamentosaempresa()
Departamento.rendrizaCriarDepartamento()
Departamento.rendrizaContratar()
Departamento.rendrizaDemitirFuncionário()
Departamento.rendrizaEditarDepartamento()
Departamento.rendrizaDeletarDepartamento()