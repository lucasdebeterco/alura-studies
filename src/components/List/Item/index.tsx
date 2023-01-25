import style from "../list.module.scss";
import {TarefaProps} from "../../../types/tarefa";

export function Item({tarefa, tempo, selecionado, completado, id}: TarefaProps) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}