const formElm = document.querySelector("form")
const platebniKarta = document.querySelector("#card")
const doprava = document.querySelector("#doprava")
const textElm = document.querySelector("#text")

platebniKarta.addEventListener("change", (e) => {
    e.preventDefault()
    const delka = e.target.value.length
    if (delka < 16) {
        textElm.textContent = `Číslo karty je příliš krátké. Chybí ${16 - delka} číslic.`
        platebniKarta.classList.add("field--wrong")
    } else if (delka > 16) {
        textElm.textContent = `Číslo karty je moc dlouhé. Přebývá ${delka - 16} číslic.`
        platebniKarta.classList.add("field--wrong")
    } else {
        textElm.textContent = ""
        platebniKarta.classList.remove("field--wrong")

        formElm.addEventListener("submit", (e) => {
            e.preventDefault()
            // console.log("platební karta: " + platebniKarta.value)
            // console.log("doprava: " + doprava.value)
            formElm.innerHTML = `
            <h1>Hotovo</h1>
            <p>Objednávka odeslána ke zpracování.</p>
            `
        })
    }
})

// change je lepší !