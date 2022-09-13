import { Api } from "../API/api.js"

const todosOsUsuarios = await Api.listarTodosusuarios()
const todosOsSetores = await Api.listarTodosOsSetores()
const todosOsDepartamentos = await Api.listarTodosOsdepartamentos()
const listaDeEmpresas = await Api.ListarEmpresas()
class Departamento {

    static rendrizaListartodososdepartamentos() {
        const ulDep = document.querySelector("#admin__ul__todosOsDepartamentos")

        todosOsDepartamentos.forEach((elem) => {
            const li = document.createElement("li")

            li.classList.add("admin__empresas")

            const h3name = document.createElement("h3")
            const h3description = document.createElement("h3")
            const h3descriptionname = document.createElement("h3")
            const h3companiesopening_hours = document.createElement("h3")
            const h3companiesdescription = document.createElement("h3")

            h3name.innerText = `${elem.name}`
            h3description.innerText = `${elem.description}`
            h3descriptionname.innerText = `Empresa: ${elem.companies["name"]}`
            h3companiesopening_hours.innerText = `Abertura: ${elem.companies["opening_hours"]}`
            h3companiesdescription.innerText = `Descrição: ${elem.companies["description"]}`

            li.append(h3name, h3description, h3descriptionname, h3companiesopening_hours, h3companiesdescription)

            ulDep.appendChild(li)
        });
    }

    static async rendrizaListarosTodososdepartamentosaempresa() {

        const ulDepEmpresasEspecificas = document.querySelector("#admin__ul__ListarTodosOsDepartamentosDaEmpresa")
        const seletcDepempresas = document.querySelector("#admin__ListadoDepartamentosDeUmaEmpresa")

        const btnadmin__btn__selcet = document.querySelector("#admin__btn__selcet")

        todosOsDepartamentos.forEach((elem) => {
            //  console.log(elem)
            const option = document.createElement("option")
            option.innerText = elem.companies["name"]
            option.value = elem.companies["uuid"]
            seletcDepempresas.append(option)
        });

        btnadmin__btn__selcet.addEventListener("click", async (e) => {

            ulDepEmpresasEspecificas.innerHTML = ""

            todosOsDepartamentos.forEach(async (elem) => {
                if (seletcDepempresas.value === elem.companies["uuid"]) {
                    let empresasDep = await Api.listarTodosOsdepartamentosDeEmpresa(elem.companies["uuid"])
                    empresasDep.forEach((elem) => {
                        console.log(elem)
                        const li = document.createElement("li")
                        li.classList.add("admin__empresas")

                        const h3name = document.createElement("h3")
                        const h3description = document.createElement("h3")
                        const h3descriptionname = document.createElement("h3")
                        const h3companiesopening_hours = document.createElement("h3")
                        const h3companiesdescription = document.createElement("h3")

                        h3name.innerText = `${elem.name}`
                        h3description.innerText = `${elem.description}`
                        h3descriptionname.innerText = `Empresa: ${elem.companies["name"]}`
                        h3companiesopening_hours.innerText = `Abertura: ${elem.companies["opening_hours"]}`
                        h3companiesdescription.innerText = `Descrição: ${elem.companies["description"]}hrs`
                        li.append(h3name, h3description, h3descriptionname, h3companiesopening_hours, h3companiesdescription)

                        ulDepEmpresasEspecificas.appendChild(li)
                    })
                }
            })
        })
    }


    static rendrizaCriarDepartamento() {
        const nome = document.querySelector("#admin_name__empresa")
        const descricao = document.querySelector("#admin_name__description")
        const uuid = document.querySelector("#admin_name__company_uuid")


        const btn = document.querySelector("#admin__CriarDepartamento")

        btn.addEventListener("click", async (e) => {
            e.preventDefault()
            const body = {
                name: nome.value,
                description: descricao.value,
                company_uuid: uuid.value
            }
            console.log(body)
            await Api.criarDepartamento(body)
        })
    }

    static rendrizaContratar() {

        const btn = document.querySelector("#admin__contratar")
        btn.addEventListener("click", async (e) => {
            e.preventDefault()

            const uuidFunc = document.querySelector("#admin__uuidFuncionario")
            const uuidDep = document.querySelector("#admin__uuidDapartamento")

            console.log(uuidFunc.value, uuidDep.value)
            const body = {
                user_uuid: uuidFunc.value,
                department_uuid: uuidDep.value
            }
            console.log(body)
            await Api.contratarFuncionario(body)

        })
    }


    static rendrizaDemitirFuncionário() {
        const input = document.querySelector("#demitir")
        /* passar o id */
        const btn = document.querySelector("#admin__demitirFuncionario")
        btn.addEventListener("click", async (e) => {
            e.preventDefault()

            await Api.demitirFuncionarios(input.value)
        })
    }

    static rendrizaEditarDepartamento() {
        const description = document.querySelector("#admin__departamento")
        const uuid = document.querySelector("#admin__uuid")

        const btn = document.querySelector("#admin__ediarDep")
        btn.addEventListener("click", async (e) => {
            e.preventDefault()
            const body = {
                description: description.value
            }
            console.log(body)
            await Api.editarDepartamento(body, uuid.value)
        })
    }

    static rendrizaDeletarDepartamento() {
        const input = document.querySelector("#admin__deletarDepartamento")
        /* id do departamento */
        const btn = document.querySelector("#admin__deletarDep")
        btn.addEventListener("click", async (e) => {
            e.preventDefault()
            await Api.DeleterDepartamento(input.value)
        })
    }

    static casdastrarEmpresas() {

        const inputname = document.querySelector("#admin_empresa")
        const inputopening_hours = document.querySelector("#admin_empresa__description")
        const inputdescription = document.querySelector("#admin_open__wokrr_uuid")
        const inputsector_uuid = document.querySelector("#admin_name__setor_uuid")

        const btnCriarEmpresas = document.querySelector("#admin__CriarEmpresa")

        btnCriarEmpresas.addEventListener("click", async (e) => {
            e.preventDefault()

            const body = {
                name: inputname.value,
                opening_hours: inputopening_hours.value,
                description: inputdescription.value,
                sector_uuid: inputsector_uuid.value
            }

            await Api.cadastrarEmpresa(body)
            console.log(body)
        })
    }

    static async uuidSetores() {
        const selectCadastrar = document.querySelector("#admin__catdastrarEmpresas")

        todosOsSetores.forEach((elm) => {
            const option = document.createElement("option")
            option.innerText = elm.description
            option.value = elm.uuid
            selectCadastrar.append(option)
        })

        const btnuuidSetor = document.querySelector("#buscar__uuid__setor")
        btnuuidSetor.addEventListener("click", (e) => {
            e.preventDefault()
            const inputuuidStor = document.querySelector("#admin_name__setor_uuid")
            inputuuidStor.value = selectCadastrar.value
        })
    }

    static async uuidEmpresa() {
        const selectCadastrar = document.querySelector("#admin__catdastrarEmpresas")

        todosOsSetores.forEach((elm) => {
            const option = document.createElement("option")
            option.innerText = elm.description
            option.value = elm.uuid
            selectCadastrar.append(option)
        })

        const btnuuidSetor = document.querySelector("#buscar__uuid__setor")
        btnuuidSetor.addEventListener("click", (e) => {
            e.preventDefault()
            const inputuuidStor = document.querySelector("#admin_name__setor_uuid")
            inputuuidStor.value = selectCadastrar.value
        })
    }

    static async uuidFuncinario() {


        const contratar = document.querySelector("#admin__uudi__Funcionario_contratar")
        const demitir = document.querySelector("#funcioanrios__uuid__demitir")

        todosOsUsuarios.forEach((elm) => {
            if (!elm.is_admin && !elm.department_uuid) {
                const option = document.createElement("option")
                option.value = elm.uuid
                option.innerText = elm.username
                contratar.appendChild(option)
            } else if (!elm.is_admin && elm.department_uuid) {
                const option = document.createElement("option")
                option.value = elm.uuid
                option.innerText = elm.username
                demitir.appendChild(option)
            }
        })

        const btnContratar = document.querySelector("#uuid__funcionario__contratamento")
        btnContratar.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            document.querySelector("#admin__uuidFuncionario").value = contratar.value
        })


        const btnDemitir = document.querySelector("#buscar_uuid_Funcionário_demitir")
        btnDemitir.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            document.querySelector("#demitir").value = demitir.value
        })
    }

    static async uuidDepartamento() {
        const contratar = document.querySelector("#admin__deparatemnto__uuid__funcionarios")
        const deparatemntoUuid = document.querySelector("#admin__deparatemnto__uuid__funcionarios")
        const editardescricao = document.querySelector("#uuid_deparatemnto_editarDescricao")
        const deletarDep = document.querySelector("#admin__deletar__departamento")

        todosOsDepartamentos.forEach((elm) => {
            const optin = document.createElement("option")
            optin.innerText = elm.name
            optin.value = elm.uuid
            editardescricao.appendChild(optin)
            contratar.appendChild(optin)
            editardescricao.appendChild(optin)
            deparatemntoUuid.appendChild(optin)
        })

        todosOsDepartamentos.forEach((elm) => {
            const optin = document.createElement("option")
            optin.innerText = elm.name
            optin.value = elm.uuid

            editardescricao.appendChild(optin)

        })
        todosOsDepartamentos.forEach((elm) => {
            const optin = document.createElement("option")
            optin.innerText = elm.name
            optin.value = elm.uuid

            deletarDep.appendChild(optin)
        })

        const btnContaratrDep = document.querySelector("#buscar_uuid_departamento_contratar")
        btnContaratrDep.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector("#admin__uuidDapartamento").value = contratar.value
        })

        const btnDeletarDep = document.querySelector("#btn__deletar__deparatemnto")
        btnDeletarDep.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            document.querySelector("#admin__deletarDepartamento").value = deletarDep.value
        })

        const btneditarDep = document.querySelector("#admin__editarDep_descricao")
        btneditarDep.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            document.querySelector("#admin__uuid").value = editardescricao.value
        })
    }

    static async uuidEmpresa() {
        const empresaUuid = document.querySelector("#admin__uuid__Empresa")

        listaDeEmpresas.forEach((elm) => {

            const option = document.createElement("option")
            option.value = elm.uuid
            option.innerText = elm.name
            empresaUuid.appendChild(option)
        })

        const btncriardep = document.querySelector("#uuid__empresa__criarDep")
        btncriardep.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            document.querySelector("#admin_name__company_uuid").value = empresaUuid.value
        })
    }
}
Departamento.uuidDepartamento()
Departamento.uuidEmpresa()
Departamento.uuidFuncinario()
Departamento.uuidSetores()
Departamento.rendrizaListartodososdepartamentos()
Departamento.rendrizaListarosTodososdepartamentosaempresa()
Departamento.rendrizaCriarDepartamento()
Departamento.rendrizaContratar()
Departamento.rendrizaDemitirFuncionário()
Departamento.rendrizaEditarDepartamento()
Departamento.rendrizaDeletarDepartamento()
Departamento.casdastrarEmpresas()
