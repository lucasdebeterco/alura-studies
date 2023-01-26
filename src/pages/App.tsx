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
    return (
    <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
        <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
