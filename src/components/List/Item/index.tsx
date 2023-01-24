import style from "../list.module.scss";

interface ItemProps {
    tarefa: String
    tempo: String,
}

export function Item({tarefa, tempo}: ItemProps) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}