class ApiCompanies {

    /*  */

    static URLbase = "http://localhost:6278/"


    static Token = localStorage.getItem("DespoisEuVejoOqColocarAqui:token")

    static headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.Token}`
    }

    /* ROTAS QUE NÂO UTILIZAM TOKEN */


    static async ListAllCompanies() {
        await fetch(`${this.URLbase}/companies`,
            { "Content-Type": "application/json" })
            .then(resp => resp.json())
            .then(resp => resp)

    }

    static async ListCompaniesByIndustry(IndustrySectors) {
        await fetch(`${this.URLbase}companies/${IndustrySectors}`,
            { "Content-Type": "application/json" })
            .then(resp => resp.json())
            .then(resp => resp)

    }


    static async registration(bodyRegister) {
        await fetch(`${this.URLbase}`,
            {
                "Content-Type": "application/json",
                body: JSON.stringify(bodyRegister)
            })
            .then(resp => resp.json())
            .then(resp => resp)

    }

    static async logar(bodyLogin) {
        await fetch(`${this.URLbase}auth/login`,
            {
                "Content-Type": "application/json",
                body: JSON.stringify(bodyLogin)
            })
            .then(resp => resp.json())
            .then(resp => resp)

    }


    /*ADMIN*/

    static() { }

    static() { }

    static() { }

    /*SECTORES*/

    static() { }

    /*DEPARTAMENT*/

    static() { }

    static() { }

    static() { }

    static() { }

    static() { }

    static() { }

    /*COMPANY*/

    static() { }

    /*EMPLYEES*/

    static() { }

    static() { }

    static() { }

}


export { ApiCompanies }