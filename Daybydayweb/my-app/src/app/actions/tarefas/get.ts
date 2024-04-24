'use server'

export async function get(tarefa?: any, mes?: number) {
    const queryParam = new URLSearchParams()
    if (tarefa) queryParam.append('tarefa', tarefa)
    if (mes) queryParam.append('mes', mes.toString())
    
    const url = `${process.env.API_BASE_URL}/tarefa?${queryParam.toString()}`
    const resp = await fetch(`${process.env.API_BASE_URL}/tarefa?${queryParam.toString()}`, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json.content
}