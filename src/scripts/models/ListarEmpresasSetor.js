import { Api } from "../API/api.js";

const listaDeEmpresas = await Api.ListarEmpresas()

const arrayListaDeEmpresas = listaDeEmpresas
const assraySetores = await Api.listarTodosOsSetores()

class Rendrizandosetores {

    static setores() {

        const arraysetores = []

        const btn = document.querySelector("#admin__btn__bucarporFiltragem")

        const select = document.querySelector("#empresas__setores")

        for (let i = 0; i < arrayListaDeEmpresas.length; i++) {
            arraysetores.push(arrayListaDeEmpresas[i].sectors.description)
        }

        const uniqueArr = [...new Set(arraysetores)]

        uniqueArr.forEach(async (elem) => {

            const option = document.createElement("option")
            option.innerText = elem
            option.value = elem
            select.appendChild(option)
        })

        btn.addEventListener("click", async (e) => {
            e.preventDefault()
            if (select.value) {
                const ulSetores = document.querySelector("#admin__ul__setores")
                ulSetores.innerHTML = ""
                let filtragem = await Api.LisarEmpresasPorSetor(select.value)
                filtragem.forEach((elem) => {
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

                    ulSetores.appendChild(li)
                })
            }
        })
    }

    static async listandoseroresExistentes() {

        const ul = document.querySelector('#admin__setores')

        assraySetores.forEach((elm) => {

            const li = document.createElement("li")
            li.classList.add("admin__empresas")
            const h2 = document.createElement("h2")
            h2.innerText = elm.description
            h2.classList.add("setores")
            li.appendChild(h2)
            ul.appendChild(li)
        })
    }
}
Rendrizandosetores.listandoseroresExistentes()
Rendrizandosetores.setores()