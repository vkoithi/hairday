import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

export function hoursLoad({date}){
    const opening = openingHours.map((hour) => {
        //Recupera somente a hora.
        const [scheduleHour] = hour.split(":")
        
        //Adciiona a hora na data e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        console.log(isHourPast)
    })
}