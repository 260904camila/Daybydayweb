interface Tarefa {
    id: number,
    nome: string,
    icone: string
}

interface Categoria {
    id: number,
    descricao: string,
    data: string,
    tipo: "ENTRADA" | "SAIDA",
    tarefa: Tarefa
}