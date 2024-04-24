"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/tarefa/${id}`)

    if (!response.ok) {
        throw new Error('Tarefa não encontrada')
    }

    return await response.json()
}