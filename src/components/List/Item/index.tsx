import style from "./item.module.scss";
import {TarefaProps} from "../../../types/tarefa";

interface ItemProps extends TarefaProps {
    selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

export function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: ItemProps) {
    return (
        <li className={`${style.item} ${completado ? style.itemCompletado : ''} ${selecionado ? style.itemSelecionado : ''}`}
            onClick={() => !completado && selecionaTarefa({tarefa, tempo, selecionado, completado, id})
        }>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            { completado && <span className={style.concluido} aria-label="tarefa-completada"></span> }
        </li>
    )
}