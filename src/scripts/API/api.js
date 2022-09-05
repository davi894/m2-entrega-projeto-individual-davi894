class ApiCompanies {

    static URLbase = "http://localhost:6278/"

    static Token = localStorage.getItem("TOKEN:Token")
    static Id = localStorage.getItem("ID:Id")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.Token}`
    }

    /* ROTAS QUE NÂO UTILIZAM TOKEN */

    static async ListAllCompanies() {
        await fetch(`${this.URLbase}/companies`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async ListCompaniesByIndustry(IdIndustrySectors) {
        await fetch(`${this.URLbase}companies/${IdIndustrySectors}`, {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async registration(bodyRegister) {
        await fetch(`${this.URLbase}auth/register/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyRegister)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async Logar(bodyLogin) {
        await fetch(`${this.URLbase}auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyLogin)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    /*ADMIN*/

    static async ListAllUsers() {

        await fetch(`${this.URLbase}users`, {
            method: "GET",
            Authorization: `Bearer ${this.Token}`,
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async UsersWithoutDepartments() {
        await fetch(`${this.URLbase}admin/out_of_work`, {
            method: "GET",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async UpdateEmployeeInformation(body, uuidEmployee) {
        await fetch(`${this.URLbase}admin/update_user/${uuidEmployee}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    /*ADMIN--SECTORES*/

    static async ListAllSectors() {
        const todosSetores = await fetch(`${this.URLbase}sectors`, {
            method: "GET",
            Authorization: `${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return todosSetores
    }

    /*ADMIN--DEPARTAMENT*/

    static async DeleteDepartment(idDepartamento) {
        await fetch(`${this.URLbase}departments/${idDepartamento}`, {
            method: "DELETE",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async Hireemployee(uuidContratado) {
        await fetch(`${this.URLbase}departments/hire/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(uuidContratado)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async Dismissemployee(uuidDemitirFuncionario) {
        await fetch(`${this.URLbase}/${uuidDemitirFuncionario}`, {
            method: "PATCH",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async ListAllDepartmentsInThecompany(uuidDepartamento) {
        const todosOsDepratemntos = await fetch(`${this.URLbase}/${uuidDepartamento}`, {
            method: "GET",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return todosOsDepratemntos
    }

    static async listAlldepartments() {
        await fetch(`${this.URLbase}departments`, {
            method: "GET",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async Createdepartment(body) {
        await fetch(`${this.URLbase}departments`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    /*ADMIN--COMPANY*/

    static async RegisterCompany(cadastroEmpresa) {
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
        /*   {
              "username": "Bertoldo",
              "email": "bertoldo@mail.com"
            } */
        await fetch(`${this.URLbase}users`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(dadosAtualizado)
        })
            .then(resp => resp.json())
            .then(resp => resp)
    }

    static async ListAllEmployeesOfTheMonth() {
        const EmployeesOfTheMonth = await fetch(`${this.URLbase}users/departments/coworkers`, {
            method: "GET",
            headers: `Bearer ${this.Token}`,
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return EmployeesOfTheMonth
    }

    static async ListEmployeeIsDepartment() {
        const ListEmployees = await fetch(`${this.URLbase}users/departments/coworkers`, {
            method: "GET",
            Authorization: `Bearer ${this.Token}`
        })
            .then(resp => resp.json())
            .then(resp => resp)
        return ListEmployees
    }

}
export { ApiCompanies }