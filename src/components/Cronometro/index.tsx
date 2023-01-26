import {Button} from '../Button';
import Relogio from "./Relogio";
import style from './cronometro.module.scss';
import {TarefaProps} from "../../types/tarefa";
import {useState} from "react";
import {tempoParaSegundos} from "../../utils/time";

interface Props {
    selecionado: TarefaProps | undefined
}

export default function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>();
    if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro </p>tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}