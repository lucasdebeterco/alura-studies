import style from './list.module.scss'
import {Item} from "./Item";
import {TarefaProps} from "../../types/tarefa";

export function List({tarefas}: {tarefas: TarefaProps[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                { tarefas.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}