import dayjs from "dayjs"
import {apiConfig} from "./api-config.js"

export async function scheduleFetchByDay({date}){
    try{
        // Fazendo a requisição.
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        // Converte para JSON.
        const data = await response.json()

        // Filtra os agendamento pelo dia selecionado.
        const dailyShedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailyShedules
        
    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar os agendamento do dia selecionado.")
    }
}