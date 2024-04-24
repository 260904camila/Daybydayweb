'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { Icon } from "./Icon";

interface TarefaSelectProps  {
    categorias: Array<Tarefa>,
    onChange?: ChangeEventHandler
}

export function TarefaSelect({tarefas, onChange}: TarefaSelectProps) {

    return (
        <Select
            items={tarefas}
            label="Tarefa"
            variant="bordered"
            name="tarefa"
            placeholder="Selecione uma tarefa"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(tarefa) => 
                <SelectItem key={tarefa.nome} startContent={<Icon name={tarefa.icone} />}>
                    {tarefa.nome}
                </SelectItem>
            }
        </Select>
    )
}