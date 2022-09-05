import { ApiCompanies } from "../API/api.js"

class Register {

    static async register() {
        const cadastro__input__email = document.querySelector("#cadastro__input__email")
        const cadastro__input__username = document.querySelector("#cadastro__input__username")
        const cadastro__input__professional_level = document.querySelector("#cadastro__input__professional_level")
        const cadastro__input__password = document.querySelector("#cadastro__input__password")

        const cadastro__btn__cadastrar = document.querySelector("#cadastro__btn__cadastrar")

        cadastro__btn__cadastrar.addEventListener("click", async (e) => {
            e.preventDefault()
            const bodyRegister = {
                password: cadastro__input__password.value,
                email: cadastro__input__email.value,
                professional_level: cadastro__input__professional_level.value,
                username: cadastro__input__username.value
            }
            console.log(bodyRegister)
            await ApiCompanies.registration(bodyRegister)
        })
    }
}
Register.register()
export { Register }