import { ApiCompanies } from "../API/api.js"
class Login {

    static async singUp() {

        const login__input__email = document.querySelector("#login__input__email")
        const login__input__password = document.querySelector("#login__input__password")

        const login__btn__logar = document.querySelector("#login__btn__logar")

        login__btn__logar.addEventListener("click", async (e) => {
            e.preventDefault()

            const bodyLogin = {
                email: login__input__email.value,
                password: login__input__password.value
            }
            console.log(bodyLogin)

            await ApiCompanies.Logar(bodyLogin)
        })
    }
}

Login.singUp()
