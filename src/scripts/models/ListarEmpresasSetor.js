import { ApiCompanies } from "../API/api.js";

const listaDeEmpresas = await ApiCompanies.ListAllCompanies()

const arrayListaDeEmpresas = listaDeEmpresas

class rendrizandosetores {

    static setores() {

        const ulSetores = document.querySelector("#admin__ul__setores")

        arrayListaDeEmpresas.forEach(async (elem) => {
            console.log(elem)

            const li = document.createElement("li")
            li.innerText = elem.sectors["description"]

            ulSetores.appendChild(li)
        });
    }
}

rendrizandosetores.setores()