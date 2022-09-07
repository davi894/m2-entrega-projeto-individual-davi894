import { ApiCompanies } from "../API/api.js";

const listaDeEmpresas = await ApiCompanies.ListAllCompanies()

const arrayListaDeEmpresas = listaDeEmpresas

class ListCompanies {

    static async RenderingCompanies() {

        const ulEmpresas = document.querySelector("#lista__ul__empresas")

        arrayListaDeEmpresas.forEach(async (elem) => {
            const li = document.createElement("li")

            const h2 = document.createElement("h2")
            h2.classList.add("nome__h2__empresa")
            const h3 = document.createElement("h3")
            h3.classList.add("ramo__h3__empresa")
            const p = document.createElement("p")
            p.classList.add("descricao__p__empresa")
            const span = document.createElement("span")
            span.classList.add("funcionamento__h2__empresa")

            h2.innerText = elem.name
            h3.innerText = elem.sectors["description"]
            p.innerText = elem.description
            span.innerText = elem.opening_hours

            li.append(h2, h3, p, span)

            ulEmpresas.appendChild(li)
        })
    }
}

ListCompanies.RenderingCompanies()

export { ListCompanies }