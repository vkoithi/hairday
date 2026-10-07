import { apiConfig } from "./api-config.js"

export async function scheduleCancel({ id }) {
  try {
    console.log("ID recebido:", id)

    const response = await fetch(
      `${apiConfig.baseURL}/schedules/${id}`,
      {
        method: "DELETE",
      }
    )

    console.log("STATUS:", response.status)

    if (!response.ok) {
      throw new Error("Não foi possível cancelar o agendamento.")
    }
  } catch (error) {
    console.log(error)
    alert("Não foi possível cancelar o agendamento.")
  }
}