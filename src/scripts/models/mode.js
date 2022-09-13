class Mode {

    static mode() {
        const body = document.querySelector("body")
        const btnMode = document.querySelector(".mode")
        btnMode.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(e.target)
            body.classList.toggle("model")
        })
    }
}
Mode.mode()
