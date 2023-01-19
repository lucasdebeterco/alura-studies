import style from './button.module.scss';

interface ButtonProps {
    children: String
}

export function Button({children}: ButtonProps) {
    return(
        <button className={style.botao}>
            {children}
        </button>
    )
}