

class Api {

    static URLbase = "http://localhost:6278/"

    static Token = localStorage.getItem("TOKEN:Token")
    static Id = localStorage.getItem("ID:Id")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.Token}`
    }

    /* ROTAS QUE NÂO UTILIZAM TOKEN */

    static async ListarEmpresas() {
        return await fetch(`${this.URLbase}companies`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async LisarEmpresasPorSetor(IdIndustrySectors) {
        console.log(IdIndustrySectors)
        return await fetch(`${this.URLbase}companies/${IdIndustrySectors}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async cadastrar(bodyRegister) {
        console.log(bodyRegister)
        await fetch(`${this.URLbase}auth/register/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRegister)
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                resp
            })
    }

    static async Logar(bodyLogin) {
        console.log(bodyLogin)
        await fetch(`${this.URLbase}auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyLogin)
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)

                if (resp.is_admin) {
                    alert("O Admin Logou")
                    localStorage.setItem("TOKEN:Token", resp.token)
                    localStorage.setItem("ID:Id", resp.uuid)
                    window.location.replace("/src/pages/admin/admin.html")
                } else if (!resp.is_admin) {
                    alert("O funcionário Logou")
                    localStorage.setItem("TOKEN:Token", resp.token)
                    localStorage.setItem("ID:Id", resp.uuid)
                    window.location.replace("/src/pages/admin/pages/funcionarios.html")
                }
            })
    }

    /*ADMIN*/

    static async listarTodosusuarios() {

        return await fetch(`${this.URLbase}users`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async usuariosSemDepartamentos() {
        const usuarisoSemDeparatemnto = await fetch(`${this.URLbase}admin/out_of_work`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return usuarisoSemDeparatemnto
    }

    static async adminEditarDadosDoFuncionario(body, uuidEmployee) {
        // console.log(body, uuidEmployee)
        await fetch(`${this.URLbase}admin/update_user/${uuidEmployee}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                if (resp.error) {
                    alert(resp.error)
                } else {
                    alert("usuário editado")
                }
                return resp
            })
    }

    /*ADMIN--SECTORES*/

    static async listarTodosOsSetores() {
        return await fetch(`${this.URLbase}sectors`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)

    }

    /*ADMIN--DEPARTAMENT*/

    static async DeleterDepartamento(idDepartamento) {
        console.log(idDepartamento)
        await fetch(`${this.URLbase}departments/${idDepartamento}`, {
            method: "DELETE",
            headers: this.headers
        })
            .then(resp => {
                if (resp.status === 404) {
                    alert("Departamento já foi deletado")
                } else {
                    alert("Departamento deletado com sucesso")
                }
            })
    }

    static async contratarFuncionario(body) {
        console.log(body)
        await fetch(`${this.URLbase}departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                alert("Funcionário foi contratado")
                console.log(resp)
            })
    }

    static async demitirFuncionarios(uuidDemitirFuncionario) {
        console.log(uuidDemitirFuncionario)
        await fetch(`${this.URLbase}departments/dismiss/${uuidDemitirFuncionario}`, {
            method: "PATCH",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => {
                alert("Funcionário foi demitido ")
                console.log(resp)
            })
    }

    static async listarTodosOsdepartamentosDeEmpresa(uuidDepartamento) {
        console.log(uuidDepartamento)
        return await fetch(`${this.URLbase}departments/${uuidDepartamento}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async listarTodosOsdepartamentos() {
        return await fetch(`${this.URLbase}departments`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async criarDepartamento(body) {
        console.log(body)

        await fetch(`${this.URLbase}departments`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                alert("Departamento criado")
                console.log(resp)
            })
    }

    static async editarDepartamento(body, uuid) {
        await fetch(`${this.URLbase}departments/${uuid}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => {
                alert("Departamento editado")
                console.log(resp)
            })
    }

    /*ADMIN--COMPANY*/

    static async cadastrarEmpresa(cadastroEmpresa) {
        console.log(cadastroEmpresa)
        await fetch(`${this.URLbase}companies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(cadastroEmpresa)
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error?.length == undefined) {
                    alert("Empresa criada")
                } else {
                    alert("Preencha todos os cambos parar criar uma empresa")
                }
            })
    }

    /*EMPLYEES*/

    static async funcionariosEditandoPropriosdados(dadosAtualizado) {

        await fetch(`${this.URLbase}users`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dadosAtualizado)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async ListarosDepartamentosdaempresadofuncionáriologado() {
        return await fetch(`${this.URLbase}users/departments`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async listartodosOsFuncionariosDoDepartamentoDoFuncionario() {
        return await fetch(`${this.URLbase}users/departments/coworker`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async BuscasInformaçõesdofuncionariologado() {
        return await fetch(`${this.URLbase}users/profile`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }
}
export { Api }