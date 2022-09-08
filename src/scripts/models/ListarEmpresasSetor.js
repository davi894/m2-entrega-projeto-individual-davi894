import { ApiCompanies } from "../API/api.js";

const listaDeEmpresas = await ApiCompanies.ListAllCompanies()

const arrayListaDeEmpresas = listaDeEmpresas

class rendrizandosetores {

    static setores() {

        const ulSetores = document.querySelector("#admin__ul__setores")

        const btn = document.querySelector("#admin__btn__bucarporFiltragem")

        const select = document.querySelector("#empresas__setores")
        arrayListaDeEmpresas.forEach(async (elem) => {
            console.log(elem)

            const options = document.createElement("option")
            options.innerText = elem.sectors["description"]
            options.classList.add("adim__option__filtragem")
            options.value = elem.sectors["description"]
            select.append(options)

        });

        btn.addEventListener("click", (e) => {
            const optionsFiltragem = document.querySelector(".adim__option__filtragem")
            e.preventDefault()
            console.log(optionsFiltragem.innerText)

        })
    }
}

rendrizandosetores.setores()