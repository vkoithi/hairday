export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")
    console.log(hours)

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            // Renive a classe hour selected de todas as li não selecionadas.
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Adiciona a classse na li testada.
            selected.target.classList.add("hour-selected")
        })
    })
}