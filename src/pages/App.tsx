import React, {useState} from 'react';
import Form from "../components/Form";
import {List} from "../components/List";
import style from './app.module.scss';
import Cronometro from "../components/Cronometro";
import {TarefaProps} from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<TarefaProps[] | []>([]);

    return (
    <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas}/>
        <Cronometro />
    </div>
  );
}

export default App;
