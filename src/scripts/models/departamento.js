import { Api } from "../API/api.js"

/* await Api.DeleterDepartamento()
await Api.contratarFuncionario()
await Api.demitirFuncionarios()
*/
const todosOsDepartamentos = await Api.listarTodosOsdepartamentos()
/* 
await Api.cadastrarEmpresa()
 */

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

        /**/
        /*   <label for="">Nome </label>
          <input type="text" id="admin_empresa">
          <label for="">Descrição</label>
          <input type="text" id="admin_empresa__description">
          <label for="">Abertura</label>
          <input type="text" id="admin_open__wokrr_uuid">
          <label for="">uuid setor</label>
          <input type="text" id="admin_name__setor_uuid">
          <button id="admin__CriarEmpresa">criar</button> */
    }
}

Departamento.rendrizaListartodososdepartamentos()
Departamento.rendrizaListarosTodososdepartamentosaempresa()
Departamento.rendrizaCriarDepartamento()
Departamento.rendrizaContratar()
Departamento.rendrizaDemitirFuncionário()
Departamento.rendrizaEditarDepartamento()
Departamento.rendrizaDeletarDepartamento()
Departamento.casdastrarEmpresas()
/* < !--{
            "uuid": "fc65d0be-507e-4c6e-badc-ccc4417ef980",
            "name": "TI",
            "description": "Departamento de TI",
            "companies": {
                "uuid": "3a1746a3-c8e4-4a77-8e55-5de43ef245f8",
                "name": "Nerd lab",
                "opening_hours": "09:00",
                "description": "Criamos um site rapidão pra você",
                "sector_uuid": "17247c6b-5205-4067-9695-278fcb97d592"
            } -- > */