import { hoursLoad } from "../form/hours-load.js"

//Selecioa o input de data.
const selectedDate = document.getElementById("data")
export function schedulesDay() {
    //Obtém a data do input.
    const date = selectedDate.value
    
    //Renderiza as horas disponiveis.
    hoursLoad({date})


    //Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)

}