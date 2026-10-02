import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual.
selectedDate.value = inputToday

//Define data minima como data atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //Previnindo o comportamento padrão de carregar a página.
    event.preventDefault()


}