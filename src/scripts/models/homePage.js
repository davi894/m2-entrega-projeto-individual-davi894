import { ApiCompanies } from "../API/api.js";

const usuariosSemDepratamentos = await ApiCompanies.UsersWithoutDepartments()

console.log(usuariosSemDepratamentos)


const usuarios = await ApiCompanies.ListAllUsers()

console.log(usuarios)

class Semdepartamento {

}

