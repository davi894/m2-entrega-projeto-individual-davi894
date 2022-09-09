import { Api } from "../API/api.js";

const listaDeEmpresas = await Api.ListarEmpresas()

const arrayListaDeEmpresas = listaDeEmpresas

class listarEmpresas {

    static async renderizandoEmpresas() {

        const ulEmpresas = document.querySelector("#lista__ul__empresas")

        arrayListaDeEmpresas.forEach(async (elem) => {
            const li = document.createElement("li")
            li.classList.add("admin__empresas")
            const h2 = document.createElement("h2")
            h2.classList.add("nome__h2__empresa")
            const h3 = document.createElement("h3")
            h3.classList.add("ramo__h3__empresa")
            const p = document.createElement("p")
            p.classList.add("descricao__p__empresa")
            const span = document.createElement("span")
            span.classList.add("funcionamento__h2__empresa")

            h2.innerText = `Empresa:  ${elem.name}`
            h3.innerText = `Setor: ${elem.sectors["description"]}`
            p.innerText = `Descrição: ${elem.description}`
            span.innerText = `Abertura: ${elem.opening_hours} hrs`

            li.append(h2, h3, p, span)

            ulEmpresas.appendChild(li)
        })
    }
}

listarEmpresas.renderizandoEmpresas()

export { listarEmpresas }