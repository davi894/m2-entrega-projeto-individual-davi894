import { ApiCompanies } from "../API/api.js";

//const usuariosSemDepratamentos = await ApiCompanies.UsersWithoutDepartments()

//console.log(usuariosSemDepratamentos)


const usuarios = await ApiCompanies.ListAllUsers()

console.log(usuarios)

class HomePage {

    static async listaUsuarios() {
        document.querySelector("#admin__listarUsuarios")

        
    }

    static async usuariosSemDeparatemntos() {
        document.querySelector("#admin__semDepartamentos")


    }

}

