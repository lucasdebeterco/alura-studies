import React, {useState} from 'react';
import Form from "../components/Form";
import {List} from "../components/List";
import style from './app.module.scss';
import Cronometro from "../components/Cronometro";
import {TarefaProps} from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<TarefaProps[] | []>([]);
    const [selecionado, setSelecionado] = useState<TarefaProps>();

    function selecionaTarefa(tarefaSelecionada: TarefaProps) {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(
            tarefa => ({
                ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id
            })
        ));
    }

    function finalizarTarefa() {
        if(selecionado) {
            setSelecionado(undefined)
            setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
                if(tarefa.id === selecionado.id) {
                    return {
                        ...tarefa,
                        selecionado: false,
                        completado: true
                    }
                }
                return tarefa;
            }))
        }
    }

    return (
    <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
