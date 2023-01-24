import style from './button.module.scss';


interface ButtonProps {
    children: String,
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export function Button({children, type}: ButtonProps) {
    return(
        <button className={style.botao} type={type}>
            {children}
        </button>
    )
}