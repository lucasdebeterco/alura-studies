import style from './list.module.scss'
import {Item} from "./Item";
import {TarefaProps} from "../../types/tarefa";

interface ListProps {
    tarefas: TarefaProps[],
    selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

export function List({tarefas, selecionaTarefa}: ListProps ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                { tarefas.map((item) => (
                    <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
                ))}
            </ul>
        </aside>
    )
}