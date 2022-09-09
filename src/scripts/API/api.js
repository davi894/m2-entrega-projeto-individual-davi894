

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
                    window.location.replace(".src/pages/funcionarios.html")
                } else {
                    alert("logou em anônimo")
                    localStorage.setItem("TOKEN:Token", resp.token)
                    localStorage.setItem("ID:Id", resp.uuid)
                    window.location.replace(".src/pages/anonimo.html")
                }
            }).catch(err => {
                alert("dados ou usuário inválido")
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
            .then(resp => console.log(resp))
    }

    /*ADMIN--SECTORES*/

    static async listarTodosOsSetores() {
        const todosSetores = await fetch(`${this.URLbase}sectors`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return todosSetores
    }

    /*ADMIN--DEPARTAMENT*/

    static async DeleterDepartament0(idDepartamento) {
        await fetch(`${this.URLbase}departments/${idDepartamento}`, {
            method: "DELETE",

        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async contratarFuncionario(uuidContratado) {
        await fetch(`${this.URLbase}departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(uuidContratado)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async demitirFuncionarios(uuidDemitirFuncionario) {
        await fetch(`${this.URLbase}/${uuidDemitirFuncionario}`, {
            method: "PATCH",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async listarTodosOsdepartamentosDeEmpresa(uuidDepartamento) {
        const todosOsDepratemntos = await fetch(`${this.URLbase}/${uuidDepartamento}`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return todosOsDepratemntos
    }

    static async listarTodosOsdepartamentos() {
        await fetch(`${this.URLbase}departments`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async criarDepratamento(body) {
        await fetch(`${this.URLbase}departments`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    /*ADMIN--COMPANY*/

    static async cadastrarEmpresa(cadastroEmpresa) {
        await fetch(`${this.URLbase}companies`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(cadastroEmpresa)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    /*EMPLYEES*/

    static async UpdateEmployeeInformation(dadosAtualizado) {
        /*  {
  "username": "Bertoldo",
  "email": "bertoldo@mail.com",
  "password": "senha123"
} */
        await fetch(`${this.URLbase}users`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dadosAtualizado)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async listarTodosOsFuncionariosDoMes() {
        const EmployeesOfTheMonth = await fetch(`${this.URLbase}users/departments/coworkers`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return EmployeesOfTheMonth
    }

    static async listartodosOsFuncionariosDoDeparatmentoDoFuncionario() {
        const ListEmployees = await fetch(`${this.URLbase}users/departments/coworkers`, {
            method: "GET",
            headers: this.headers
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return ListEmployees
    }
}
export { Api }