import style from "./item.module.scss";
import {TarefaProps} from "../../../types/tarefa";

interface ItemProps extends TarefaProps {
    selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

export function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: ItemProps) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id});
    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}