import {Button} from "../Button";
import style from './form.module.scss';
import {useState} from "react";
import { Dispatch, SetStateAction } from "react";
import {TarefaProps} from "../../types/tarefa";

export function Form(setTarefas: Dispatch<SetStateAction<TarefaProps[]>>) {
    const [stateForm, setStateForm] = useState({
        tarefa: "",
        tempo: "00:00",
    })

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {...stateForm}])
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione um novo estudo</label>
                <input
                    type='text'
                    value={stateForm.tarefa}
                    onChange={event => (setStateForm({...stateForm, tarefa: event.target.value })) }
                    name='tarefa'
                    id='tarefa'
                    placeholder='O que você quer estudar?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Tempo</label>
                <input
                    type='time'
                    value={stateForm.tempo}
                    onChange={evento => setStateForm({ ...stateForm, tempo: evento.target.value})}
                    step='1'
                    name='tempo'
                    id='tempo'
                    min='00:00:00'
                    max='01:30:00'
                    required
                />
            </div>
            <Button type='submit' >
                Adicionar
            </Button>
        </form>
    )
}