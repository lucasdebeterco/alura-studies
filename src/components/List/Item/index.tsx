import style from "../list.module.scss";

interface ItemProps {
    tarefa: string
    tempo: string,
}

export function Item({tarefa, tempo}: ItemProps) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}