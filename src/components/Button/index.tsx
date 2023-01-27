import style from './button.module.scss';


interface ButtonProps {
    children: String,
    type?: 'submit' | 'reset' | 'button' | undefined;
    onClick?: () => void
}

export function Button({children, type, onClick}: ButtonProps) {
    return(
        <button onClick={onClick} className={style.botao} type={type}>
            {children}
        </button>
    )
}